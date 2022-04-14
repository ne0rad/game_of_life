export default function gameOfLife(board) {

    function copyArray(arr) {
        return arr.map(row => [...row]);
    }

    const resultBoard = copyArray(board);

    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {

            let squareSum = 0;

            squareSum += board?.[y - 1]?.[x - 1] === 1 ? 1 : 0;
            squareSum += board?.[y - 1]?.[x] === 1 ? 1 : 0;
            squareSum += board?.[y - 1]?.[x + 1] === 1 ? 1 : 0;
            squareSum += board?.[y]?.[x + 1] === 1 ? 1 : 0;
            squareSum += board?.[y]?.[x - 1] === 1 ? 1 : 0;
            squareSum += board?.[y + 1]?.[x - 1] === 1 ? 1 : 0;
            squareSum += board?.[y + 1]?.[x] === 1 ? 1 : 0;
            squareSum += board?.[y + 1]?.[x + 1] === 1 ? 1 : 0;


            if (squareSum === 3) {
                resultBoard[y][x] = 1;
            } else if (squareSum < 2 || squareSum > 3) {
                resultBoard[y][x] = 0;
            }
        }
    }
    return resultBoard;

};


