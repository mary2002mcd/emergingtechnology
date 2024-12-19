//Psycobabble responses
//elizas patterns and respones for the different user inputs
//refactored from https://keithmfoster.com/eliza-a-pioneering-natural-language-processing-program/
const responses = {
    'hello|hi|hey': [
        "Hello! How can I assist you today?",
        "Hi there! What's on your mind?",
        "Hey! How are you feeling?"
    ],
    'I feel (.*)': [
        "Why do you feel {0}?",
        "Do you often feel {0}?",
        "How does feeling {0} affect you?"
    ],
    'I am (.*)': [
        "Why are you {0}?",
        "Do you like being {0}?",
        "What made you feel {0} today?"
    ],
    'I need (.*)': [
        "Why do you need {0}?",
        "What would it mean to you to have {0}?",
        "How do you feel about needing {0}?"
    ],
    'I think (.*)': [
        "Why do you think {0}?",
        "Do you often think {0}?",
        "What led you to think {0}?"
    ],
    '(.*) sad (.*)': [
        "I'm sorry you're feeling sad. Can you tell me more?",
        "What helps when you feel sad?",
        "Would you like to explore what’s making you feel this way?"
    ],
    '(.*)': [
        "Can you elaborate on that?",
        "How does that make you feel?",
        "Why do you say that?",
        "Interesting... Can you explain more?"
    ]
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
    const seperatedWords = text.toLowerCase().split(/\s+/);
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
            const reflectedGroups = match.slice(1).map(group => useTheReflections(group || ''));
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
    const userInput = document.getElementById('user-input');
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
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
            getMessage('user', `You: ${input}`);
            const reply = respond(input);
            //display the repsone from eliza
            getMessage('eliza', `ELIZA: ${reply}`);
            //clear the input box
            userInput.value = '';
        }
    });


});