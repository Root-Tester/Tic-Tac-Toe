# Tic Tac Toe Game 

## Introduction

  Tic Tac Toe is a classic two-player game where players alternate marking spaces in a 3x3 grid. The objective is to place three of your marks (either "X" or "O") in a horizontal, vertical, or diagonal row before your opponent does.

## Features

- **Two-player Mode:** Players can take turns to play as "X" or "O."
- **AI Mode:** Play against a computer opponent, with the AI making moves based on predefined logic.
- **Win Detection:** The game automatically checks for a winner after each move, detecting horizontal, vertical, and diagonal winning conditions.
- **Tie Detection:** If all spaces on the board are filled and no player has won, the game ends in a tie.
- **Reset Option:** The game provides an option to reset the board and start a new game.
- **Intuitive User Interface:** The game is easy to play with simple click/tap interactions.

## Game Rules
- Players alternate turns.
- Player 1 is assigned "X" and Player 2 is assigned "O."
- A player wins by getting three of their marks in a row (either horizontally, vertically, or diagonally).
- The game ends in a tie if the board is full and no player has won.
- After a win or tie, the game will prompt players to restart after click the window.


## Gameplay

### 1. Starting a Game:
   - Upon launching the game, the player need to select the mode 2 player mode or Vs. Computer (if he want to play with ai). After this the 3x3 grid will be displayed.
   - Player 1 will go first and place "X" on the grid.
  ### 2. Making a Move:
   - Players click on an empty cell to place their mark (either "X" or "O").
   - The game will check if the move results in a win or tie.
  ### 3. Winning the Game:
   - The game will check if any player has succeeded in getting three marks in a row after each move.
   - If a player wins, the game will display a message announcing the winner.
  ### 4. Tie Game:
   - If all cells are filled and no player has won, the game will announce a tie.
  ### 5. Restarting the Game:
   - After a game concludes, the player needs to tap or click any key to restart the game, resetting the grid for a new game.

     

## Technical Details

### Game Logic
  The game checks for a win or tie after every move by:

  - Checking all rows, columns, and diagonals for three identical marks.
  - If a player places their mark in a winning position, the game ends and declares the winner.
  - If all cells are filled without a winner, the game ends in a tie.


### User Interface (UI)

3x3 Grid: The board consists of 9 cells, with each cell initially empty.
- **Buttons:** Players can click on any empty cell to place their mark.
- **Messages:** After each game, the UI displays whether the game was won or tied.
- **Responsive Layout:** The game layout dynamically adjusts based on the screen size, ensuring optimal playability on any device.

### Technologies Used

- **index.html:** Contains the structure of the game, including the 3x3 grid container where the JavaScript dynamically generates the grid.
- **styles.css:** Defines the layout and appearance, including the responsive design rules for different screen sizes.
- **script.js:** Contains the logic for dynamically creating the game board, player moves, AI behavior, win/tie detection, and restarting the game.

## Demo

You can check out a live demo of this Tic-Tac-Toe game [here](https://root-tester.github.io/Tic-Tac-Toe/Tic-Tac-Toe).



