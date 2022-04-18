const BOARD_SIZE = 8;
const WHITE_PLAYER = 'white';
const DARK_PLAYER = 'dark';

let selectedCell;
let pieces = [];

class Piece {
    constructor(row, col, type, player) {
        this.row = row;
        this.col = col;
        this.type = type;
        this.player = player;
    }
}
function addPieces(result,row,player){
    result.push(new Piece(0, 0, "rook", player))
    result.push(new Piece(0, 1, "knight", WHITE_PLAYER))
    result.push(new Piece(0, 2, "bishop", WHITE_PLAYER))
    result.push(new Piece(0, 5, "bishop", WHITE_PLAYER))
    result.push(new Piece(0, 3, "queen", WHITE_PLAYER))
    result.push(new Piece(0, 4, "king", WHITE_PLAYER))
    result.push(new Piece(0, 6, "knight", WHITE_PLAYER))
    result.push(new Piece(0, 7, "rook", WHITE_PLAYER))
}

function getInitialBoard() {
    let result = [];
    result.push(new Piece(0, 0, "rook", WHITE_PLAYER))
    result.push(new Piece(0, 1, "knight", WHITE_PLAYER))
    result.push(new Piece(0, 2, "bishop", WHITE_PLAYER))
    result.push(new Piece(0, 5, "bishop", WHITE_PLAYER))
    result.push(new Piece(0, 3, "queen", WHITE_PLAYER))
    result.push(new Piece(0, 4, "king", WHITE_PLAYER))
    result.push(new Piece(0, 6, "knight", WHITE_PLAYER))
    result.push(new Piece(0, 7, "rook", WHITE_PLAYER))
    for (let i = 0; i < BOARD_SIZE; i++) {
        result.push(new Piece(1, i, "pawn", WHITE_PLAYER))
        result.push(new Piece(6, i, "pawn", DARK_PLAYER))
    }
    result.push(new Piece(7, 0, "rook", DARK_PLAYER))
    result.push(new Piece(7, 1, "knight", DARK_PLAYER))
    result.push(new Piece(7, 2, "bishop", DARK_PLAYER))
    result.push(new Piece(7, 3, "queen", DARK_PLAYER))
    result.push(new Piece(7, 4, "king", DARK_PLAYER))
    result.push(new Piece(7, 5, "bishop", DARK_PLAYER))
    result.push(new Piece(7, 6, "knight", DARK_PLAYER))
    result.push(new Piece(7, 7, "rook", DARK_PLAYER))
    return result;
}

function addImage(cell, player, name) {
    const image = document.createElement('img');
    image.src = 'images/' + player + '/' + name + '.png';
    cell.appendChild(image);
}

function onCellClick(event) {
    if (selectedCell !== undefined) {
        selectedCell.classList.remove('selected');
    }
    selectedCell = event.currentTarget;
    selectedCell.classList.add('selected');
}

function createChessBoard() {
    const table1 = document.createElement('table');
    document.body.appendChild(table1);
    for (let i = 0; i < BOARD_SIZE; i++) {
        const row = table1.insertRow();
        for (let j = 0; j < BOARD_SIZE; j++) {
            const cell = row.insertCell();
            cell.id = "cell-" + i.toString() + "_" + j.toString();
            if ((i + j) % 2 === 0) {
                cell.className = 'light-cell';
            } else {
                cell.className = 'dark-cell';
            }
            cell.addEventListener('click', onCellClick);
        }
    }
    pieces = getInitialBoard();

    for (let piece of pieces) {
        addImage(table1.rows[piece.row].cells[piece.col], piece.player, piece.type);
    }
}

window.addEventListener('load', createChessBoard);