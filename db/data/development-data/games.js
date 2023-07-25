module.exports = [
  {
    board_position: [
      ["R", "P", null, null, null, null, "p", "r"],
      ["N", "P", null, null, null, null, "p", "n"],
      ["B", "P", null, null, null, null, "p", "b"],
      ["Q", "P", null, null, null, null, "p", "q"],
      ["K", "P", null, null, null, null, "p", "k"],
      ["B", "P", null, null, null, null, "p", "b"],
      ["N", "P", null, null, null, null, "p", "n"],
      ["R", "P", null, null, null, null, "p", "r"]
    ],
    turn: 'white',
    castling: 'KQkq',
    en_passant: null,
  },
  {
    board_position: [
      ["R", "P", null, null, null, null, "p", "r"],
      ["N", "P", null, null, null, null, "p", "n"],
      ["B", "P", null, null, null, null, "p", "b"],
      ["Q", "P", null, null, null, null, "p", "q"],
      ["K", null, null, "P", null, null, "p", "k"],
      ["B", "P", null, null, null, null, "p", "b"],
      ["N", "P", null, null, null, null, "p", "n"],
      ["R", "P", null, null, null, null, "p", "r"]
    ],
    turn: 'black',
    castling: 'KQkq',
    en_passant: null,
  },
  {
    board_position: [
      ["R", "P", null, null, null, null, "p", "r"],
      ["N", "P", null, null, null, null, "p", "n"],
      ["B", "P", null, null, null, null, "p", "b"],
      ["Q", "P", null, null, null, null, "p", "q"],
      ["K", null, null, "P", "p", null, null, "k"],
      ["B", "P", null, null, null, null, "p", "b"],
      ["N", "P", null, null, null, null, "p", "n"],
      ["R", "P", null, null, null, null, "p", "r"]
    ],
    turn: 'white',
    castling: 'KQkq',
    en_passant: null,
  },
];