import { useState } from 'react'
import './css/App.css';
import Pong from "./Components/Pong";

function App() {
  const [player1, setPlayer1] = useState({
      size: 18,
      color: 'blue'
  });

  const [player2, setPlayer2] = useState({
      size: 18,
      color: 'red'
  });

  const [ball, setBall] = useState({
      size: 12,
      color: 'white',
  })

  return (
    <>
      <Pong player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2}
            ball={ball} setBall={setBall} />
    </>
  )
}

export default App
