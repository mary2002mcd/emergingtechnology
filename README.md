# emergingtechnology
## Link to Github Pages
https://mary2002mcd.github.io/emergingtechnology/

Mary McDonnell
G00401878

## Introduction
This repository contains the Python solution for constructing and analyzing a trigram model using text data from Project Gutenberg. It demonstrates data preprocessing, model building, and text generation. 

## To Run
1. Clone the repository with the following command:
git clone https://github.com/mary2002mcd/emergingtechnology.git

2. Navigate to the repository
cd emergingtechnology

3. Open the jupyter notebook file trigrams.ipynb in a compatible editor

4. Run the notebook cells sequentially to see the implementations of each tasks

## Overview of trigrams.ipynb 
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