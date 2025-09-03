import './App.css'
import { useState } from 'react'

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [isXTurn, setIsXTurn] = useState(true);

  // Winner check function
  const checkWinner = (board) => {
    const winningPatterns = [
      [0,1,2], [3,4,5], [6,7,8], // rows
      [0,3,6], [1,4,7], [2,5,8], // columns
      [0,4,8], [2,4,6]           // diagonals
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // "X" ya "O"
      }
    }
    return null;
  };

  const winner = checkWinner(board);

  const handleClick = (index) => {
    if (board[index] !== "" || winner) return; // agar box fill hai ya winner mil gaya to kuch mat karo

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O"; 
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const handleRestart = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setIsXTurn(true);
  };

  const isDraw = board.every(cell => cell !== "") && !winner;

  return (
    <>
      <div className='container'>
        <div className='heading'>
          <h2>Tic Tac Toe</h2>
        </div>

        <div className='parent'>
          {board.map((value, index) => (
            <div 
              key={index} 
              className='box' 
              onClick={() => handleClick(index)}
            >
              {value}
            </div>
          ))}
        </div>

        <div className='playername'>
          {winner && <h2>Winner: {winner}</h2>}
          {!winner && !isDraw && <h2>Next Player: {isXTurn ? "X" : "O"}</h2>}
          {isDraw && <h2>Game Draw!</h2>}
        </div>

        <button className='restart' onClick={handleRestart}>Restart</button>
      </div>
    </>
  )
}

export default App;
