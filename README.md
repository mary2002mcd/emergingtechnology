# emergingtechnology

Mary McDonnell
G00401878

## Introduction
This repository contains the Python solution for constructing and analyzing a trigram model using text data from Project Gutenberg. It demonstrates data preprocessing, model building, and text generation. It also includes the files to run a ELIZA chatbot on github pages.

## Repository Includes
`.github/workflows`
`books/`
`eliza/eliza.js, index.html, style.css`
`.gitignore`
`README.md`
`trigrams.ipynb`
`trigrams.json`
`data/words.txt`
`requirements.txt`

## Link to Github Pages
https://mary2002mcd.github.io/emergingtechnology/

## To Run
1. Clone the repository with the following command:
```bash
git clone https://github.com/mary2002mcd/emergingtechnology.git
```
2. Navigate to the repository
```bash
cd emergingtechnology
```
3. **For Tasks** :Open the jupyter notebook file trigrams.ipynb in a compatible editor

4. Run the notebook cells sequentially to see the implementations of each tasks

5. **For ELIZA** : Navigate to the github pages and type into the input box. Then press send to receive a response from the chatbot.

## Overview of `trigrams.ipynb `
### Task 1: Third-Order Letter Approximation Model
* Objective: Create a trigram model by analyzing sequences of three characters from cleaned text data.

* Steps:
    - Preprocess text by removing unwanted characters and maing it uppercase
    - Count the occurrences of trigrams (three-character sequences)

* Result: A dictionary-like structure storing trigram counts

### Task 2: Generate 10000-Character String
* Objective: Generate a string of 10,000 characters using the trigram model.

* Steps:
    - Start with an initial string (e.g., TH).
    - Predict the next character based on the probability distribution of trigrams starting with the last two characters.

* Result: A randomly generated, yet statistically modeled, string.

### Task 3: Analyze the Generated Text
* Objective: Evaluate the percentage of real English words in the generated text.

* Steps:
    - Compare the generated text's words against a predefined list of English words (words.txt).
    - Calculate and display the percentage of valid words.

* Result: Percentage of valid English words in the generated text.

### Task 4: Export the Model to JSON
* Objective: Save the trigram model as a JSON file.

* Result: trigrams.json contains the trigram model for future use.

## Overview of ELIZA Chatbot
### Objective: 
Make a straight-forward chatbot inspired by the original ELIZA program.

### Features
* User friendly interface for users to input messages, and display the conversation history

* Reflective pronoun changes to a more realistic conversation

* Responses for various user inputs

### Files in the `eliza/` Folder
1. `index.html` : Contains the chatbot interface
    - Displays a welcome message
    - Has an input box to allow users to type in a statement
    - A send button to activate the javaScript logic
    - Displays the conversation history in a box in the center

2. `style.css` : Contains the styling for the html file
    - Simple, responsive, modern design

    - Makes the userface more aesthetically pleasing

3. `eliza.js` : Contains the javaScript logic for the chatbot
    - **Pattern Matching:** Matches the user inputs to predifined patterns using regular expressions

    - **Reflections:** Changes the pronouns given to make the conversion more realistic. ( **I** am feeling sad = Why are **you** feeling sad?)
    
    - **Event Handling:** Connects the chatbot logic to the user interface.

    - **Random Responses:** Chooses a random responses from predifined options to provide variety.

## Development
- Multiple commits to show refactoring and continous work until the deadline

- Issues tab: Contains tasks of this project

- Github actions: Eliza deploys to github pages after every commit to main branch

## References

- https://www.gutenberg.org/
- ChatGPT generated code
- https://developer.mozilla.org/en-US/
- https://github.com/ianmcloughlin/2425_emerging_technologies/blob/main/02_language_models.ipynb
- https://www.freecodecamp.org/news/how-to-split-a-string-in-python/
- https://docs.python.org/3/library/stdtypes.html#string-methods
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
- https://www.w3schools.com/js/js_htmldom_eventlistener.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
- https://keithmfoster.com/eliza-a-pioneering-natural-language-processing-program/
- https://docs.python.org/3/tutorial/datastructures.html#dictionaries
- https://docs.python.org/3/library/functions.html#zip
- https://docs.python.org/3/tutorial/datastructures.html#sets