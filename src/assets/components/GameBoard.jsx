import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      // updating the state in an immutable way
      // spread opearator is used to clone the aray properly
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      console.log(updatedBoard);
      updatedBoard[rowIndex][colIndex] = /* "X" */ activePlayerSymbol;
      return updatedBoard;
    });
    
    onSelectSquare();
  }
  return (
    <>
      <ol id="game-board">
        {/* {initialGameBoard.map((row, rowIndex) => <li key={rowIndex}> */}
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => handleSelectSquare(rowIndex, colIndex)}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
