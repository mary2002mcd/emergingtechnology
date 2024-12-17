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

