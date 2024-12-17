//Psycobabble responses
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

//reflections
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

//Function to reflect text
function useTheReflections(text){
    //make the text lowercase and split it up
    const seperatedWords = text.lowerCase().split(/\s+/);
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    //reflect each word
    const reflectedWords = seperatedWords.map(word => reflections[word] || word);
    //Join the reflected words back
    return reflectedWords.join(' ');
}

//function to make the respone for the user
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
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
            return response.replace(/{(\d+)}/g, (_, index) => reflectedGroups[index]);
        }
    }
    //if nothing is matching then put this sentence back to the user
    return "I don't understand, can you rephrase?";
}