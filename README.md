# Timed Math Challenge

This Python script creates a simple timed math challenge game. The user is presented with a series of arithmetic problems to solve within a time limit. Let's delve into the code to understand its functionality.

## How the Code Works

### Requirements

- Python 3.x

### Libraries Used

- **random**: This library is used to generate random numbers.
- **time**: This library helps in measuring time intervals.

### Constants

- **OPERATORS**: A list containing arithmetic operators such as addition (+), subtraction (-), and multiplication (\*).
- **MIN_OPERAND**: The minimum value for operands in the arithmetic problems.
- **MAX_OPERAND**: The maximum value for operands in the arithmetic problems.
- **TOTAL_PROBLEMS**: The total number of problems to be presented to the user.

### Function Definition

- **generate_problem()**: This function generates a random arithmetic problem by selecting random operands and an operator from the defined range and list. It returns the problem expression and its correct answer.

### Game Execution

1. The user is prompted to press any key to start the game.
2. A timer starts to record the duration of the game.
3. For each problem in the range of `TOTAL_PROBLEMS`:
   - A new problem is generated using the `generate_problem()` function.
   - The user is prompted to input their answer for the current problem.
   - If the user's answer matches the correct answer, the loop proceeds to the next problem. If not, the user is prompted to try again until the correct answer is provided.

### End of Game

- After the user has attempted all the problems or time runs out, the game ends.
- The total time taken to complete the challenge is calculated.
- A message is displayed indicating the completion of the challenge along with the total time taken.

## How to Use

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/TheToriqul/Timed-Math-Challenge.git
   ```
2. **Navigate to the Directory**:

   ```bash
   cd Timed-Math-Challenge
   ```

3. **Run the Script**:
   ```bash
   python timed_math_challenge.py
   ```

## Running the Code

- Simply execute the Python script, and follow the prompts to complete the timed math challenge.

Enjoy the challenge!

## Acknowledgments

- This project was inspired by the need to enhance mathematical skills in a fun and engaging way.

`Feel free to make any further adjustments or additions as needed!`
