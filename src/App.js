
import './assets/index.css'
import Game from './assets/Game';
import Players from './assets/components/Players';
import GameBoard from './assets/components/GameBoard';
import { useState } from 'react';

function App() {
  const [ activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){
    setActivePlayer((currPlayer) => currPlayer === 'X' ? 'O' : 'X' )
  }
  return (
    <>
    <Game />
    <main>
      <div id='game-container'>
      <ol id="players" className='highlight-player'>
        <Players initialName="player1" symbol="X" isActive={activePlayer === 'X'} />
        <Players initialName="player2" symbol="O" isActive={activePlayer === 'O'} />
      </ol>

      {/* GAME BOARD */}
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>

      LOG
    </main>
    </>
  );
}

export default App;
