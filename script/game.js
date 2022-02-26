let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0
let symbols = ['o', 'x']
let gameOver = false


function handleMove(position) {
    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime]

        gameOver = isWin();

        if(gameOver == false){
        if (playerTime == 0) {
            playerTime = 1
        } else {
            playerTime = 0
        }
    }
    }
    return gameOver
}


function isWin() {

    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i]
        let post1 = seq[0]
        let post2 = seq[1]
        let post3 = seq[2]

        if (board[post1] == board[post2] && board[post1] == board[post3] && board[post1] != '') {
            return true;
        }
    }
    return false
}