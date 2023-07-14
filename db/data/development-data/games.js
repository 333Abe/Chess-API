module.exports = [
    {
        board_position: [
            ["r", "n", "b", "q", "k", "b", "n", "r"],
            ["p", "p", "p", "p", "p", "p", "p", "p"],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            ["P", "P", "P", "P", "P", "P", "P", "P"],
            ["R", "N", "B", "Q", "K", "B", "N", "R"]
          ],
        turn: "white",
        castling: "KQkq",
        en_passant: null,        
    },
    {
        board_position: [
            ["r", "n", "b", "q", "k", "b", "n", "r"],
            ["p", "p", "p", "p", "p", "p", "p", "p"],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, "P", null, null, null],
            [null, null, null, null, null, null, null, null],
            ["P", "P", "P", "P", null, "P", "P", "P"],
            ["R", "N", "B", "Q", "K", "B", "N", "R"]
          ],
        turn: "black",
        castling: "KQkq",
        en_passant: null,        
    },
    {
        board_position: [
            ["r", "n", "b", "q", "k", "b", "n", "r"],
            ["p", "p", "p", "p", "p", null, "p", "p"],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, "p", null, null, null],
            [null, null, null, null, "P", null, null, null],
            [null, null, null, null, null, null, null, null],
            ["P", "P", "P", "P", null, "P", "P", "P"],
            ["R", "N", "B", "Q", "K", "B", "N", "R"]
          ],
        turn: "white",
        castling: "KQkq",
        en_passant: null,        
    }
]