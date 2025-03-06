const board = new Array(9).fill("");
let opponant = null;
let home = null;
let game = null;
let turn = true;


function initGame(self) {
    home = document.getElementById('home-section');
    game = document.getElementById('board-container');
    home.style.display = 'none';
    game.innerHTML = "";

    if (self) {
        if (self.id === 'computer') {
            opponant = 'bot';
        } else {
            opponant = 'human';
        }
    }

    for (let i = 0; i < 9; i++) {
        game.innerHTML += `<button id="b${i}" class="cell" onclick="play(this,${i})" value=""></button>`
        document.getElementById(`b${i}`).disabled = false;
        document.getElementById(`b${i}`).autofocus = false;
    }

}

function play(self, index) {
    if (turn) {
        self.innerText = 'X';
        self.style.color = '#0e0585e7';
        self.disabled = true;
        board[index] = 'X';
        turn = false;
    } else if (!turn && opponant === 'human') {
        self.innerText = 'O';
        self.style.color = '#550108de';
        self.disabled = true;
        board[index] = 'O';
        turn = true;
    }

    setTimeout(isGameOver,1);

    if (opponant === 'bot') {
       makeMoveByBot();
    }

}

function isGameOver() {
    const result = checkWin();

    if (result.winner) {
        const [a, b, c] = result.winningLine;

        /* ......highlight winnning line...... */
        document.getElementById(`b${a}`).style.color = "#00ff00";
        document.getElementById(`b${b}`).style.color = "#00ff00";
        document.getElementById(`b${c}`).style.color = "#00ff00";

        setTimeout(() => {
            if (opponant === 'bot') {
                if (result.winner === 'X') {

                    window.alert("You Won");

                } else {

                    window.alert("You Loose");

                }
            } else {
                if (result.winner === 'X') {

                    window.alert("Player 1 Won");

                } else {

                    window.alert("Player 2 Won");

                }
            }

            window.onkeydown = reset(false);
            window.onclick = reset(false);
        }, 5);

    } else if (result.drawCondition) {

        window.alert("It's a Darw");
        window.onkeydown = reset(false);
        window.onclick = reset(false);
    }
}

function checkWin() {
    const winCaseLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const line of winCaseLines) {
        const [a, b, c] = line;
        if (board[a] != "" && board[a] === board[b] && board[a] === board[c]) {
            return { winner: board[a], winningLine: line };
        }
    }

    /*     .......................check for a draw................   */
    if (!board.some(cell => !cell)) {
        return { winner: null, winningLine: null, drawCondition: true };
    }

    return { winner: null, winningLine: null }

}

/* ....................Logic for make move by AI ...................... */

function makeMoveByBot() {
    const over = checkWin();

    if (!turn && !over.winner && !over.drawCondition) {
        const move = getIndex();
        let box = document.getElementById(`b${move}`);
        box.innerText = 'O';
        box.style.color = '#550108de';
        box.disabled = true;
        board[move] = 'O';
        turn = true;
    }
}

function getIndex() {
    let value = -2;
    let Index = null;

    for (let i = 0; i < board.length; i++) {
        if (board[i] !== '') { continue; }
        board[i] = 'O';
        const newValue = Minimax(0, 'human');
        board[i] = '';

        if (newValue > value) {
            value = newValue;
            Index = i;
        }
    }

    return Index;
}

/* ...............Logic to Win for Computer.................... */

function Minimax(depth, player) {

    const result = checkWin();

    if (result.winner === 'O') {
        return 1;
    } else if (result.winner === 'X') {
        return -1;
    } else if (result.drawCondition) {
        return 0;
    }

    if (player === 'bot') {
        let value = -2;
        for (let i = 0; i < 9; i++) {
            if (board[i] === "") {
                board[i] = 'O';
                const newValue = Minimax(depth + 1, 'human');
                board[i] = "";
                value = (newValue > value) ? newValue : value;
            }
        }
        return value;

    } else {
        let value = 2;
        for (let i = 0; i < 9; i++) {
            if (board[i] === "") {
                board[i] = 'X';
                const newValue = Minimax(depth + 1, 'bot');
                board[i] = "";
                value = (newValue < value) ? newValue : value;
            }
        }

        return value;
    }
}


function reset(restart) {

    window.onkeydown = null;
    window.onclick = null;

    for (let i = 0; i < 9; i++) {
        board[i] = "";
    }

    initGame();
    setTimeout(() => {
        if (turn === false) {
            if (restart === true) {
                turn = true;
            } else {
                if (opponant === 'bot') {
                    console.log("dssa");
                    const move = Math.floor(Math.random() * 9);
                    const box = document.getElementById(`b${move}`);
                    box.innerText = 'O';
                    box.style.color = '#550108de';
                    box.disabled = true;
                    board[move] = 'O';
                    turn = true;
                }
            }
        }
    },5);
}

function exit() {
    reset(true);
    home.style.display = 'initial';
}
