//Psycobabble responses
//elizas patterns and respones for the different user inputs
//refactored from https://keithmfoster.com/eliza-a-pioneering-natural-language-processing-program/
const responses = {
    'hello|hi|hey' : [
        "Hello! How are you?",
        "Hi! What is on your mind today?",
        "Hey! How can I help?",
    ],
    'I have (.*)':[
        "Why do you have {0}?",
         "Can you tell me more about having {0}?",
         "Do you enjoy having {0}?",
         "Do you think having {0} is a good thing?",
    ],
      
       'I (.*) you': [
        "Why do you {0} me?",
        "Do you often {0} people?",
        "Do you {0} anyone else?"
        ],
      
    'Why (.*)':[
        "Why don't you tell me the reason why {0}?",
        "Can you give me a specific example of why {0}?",
        "What is your opinion on why {0}?"
    ],
      
    'I want (.*)':
        ["What would it mean to you if you got {0}?",
         "Why do you want {0}?",
         "What would you do if you got {0}?",
         "If you got {0}, then what?"],
};

//reflections are for better conversation because it reverses the pronouns for eliza
//reference: Ian's repository eliza notes
const reflections = {
    "I": "you",
    "me": "you",
    "my": "your",
    "am": "are",
    "you": "I",
    "your": "my",
    "yours": "mine",
    "are": "am"
};

//Function to reflect text: converts the pronouns for the chatbot I --- You
function useTheReflections(text){
    //make the text lowercase and split it up
    const seperatedWords = text.lowerCase().split(/\s+/);
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    //reflect each word
    const reflectedWords = seperatedWords.map(word => reflections[word] || word);
    //Join the reflected words back
    return reflectedWords.join(' ');
}

//function to make the response for the user by matching the input from the user against patterns and picks a response from the list
function respond(userInput){
    for(const pattern in responses){
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
        const regex = new RegExp(pattern, 'i');
        //check for matches
        const match = userInput.match(regex);

        if(match){
            const responsesList = responses[pattern];
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
            // picking a random response
            const response = responsesList[Math.floor(Math.random() * responsesList.length)];
            //reflecting captured groups to make response more natural
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
            const reflectedGroups = match.slice(1).map(group => reflectedGroups(group || ''));
            //replace the placeholders
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
            return response.replace(/{(\d+)}/g, (_, index) => reflectedGroups[index]);
        }
    }
    //if nothing is matching then put this sentence back to the user
    return "I don't understand, can you rephrase?";
}

//https://www.w3schools.com/js/js_htmldom_eventlistener.asp
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//Connect my backend logic to my frontend html
//hanfles user input, clicking the button and displaying the chat
document.addEventListener('DOMContentLoaded', ()=>{
    const chatHistory = document.getElementById('chat-history');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('send-button');

    //function to add a message to the chat
    function getMessage(who, message){
        //create a new message div
        const messageDiv = document.createElement('div');
        //add user or eliza class
        messageDiv.classList.add(who);
        //assign the message text
        messageDiv.textContent = message;
        //add to the chat history
        chatHistory.appendChild(messageDiv);
        //scroll to the bottom
        chatHistory.scrollTop = chatHistory.scrollHeight;  
    }

    //Event listener for the send button
    sendButton.addEventListener('click', ()=>{
        //trim the whitespace from the user input
        const input = userInput.value.trim();
        //if there is input
        if(input){
            //display the message from the user
            getMessage('user', 'You: ${input}');
            const reply = respond(input);
            //display the repsone from eliza
            getMessage('eliza', 'ELIZA: ${reply}');
            //clear the input box
            userInput.value = '';
        }
    });


});