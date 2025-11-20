import { useState } from "react";
import Board from "./Board";

function Pong() {
    const [player1, setPlayer1] = useState({
    size: 18,
    color: "blue",
    });

    const [player2, setPlayer2] = useState({
    size: 18,
    color: "red",
    });

    const [ball, setBall] = useState({
    size: 12,
    color: "white",
    });
    return (
        <>
          <Board/>
        </>
    )
}
export default Pong;