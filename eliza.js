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
}