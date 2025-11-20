import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Board from "./Board";
import PongStyles from "../css/Pong.module.css";

function Pong() {
    const navigation = useNavigate();
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
          <button className={PongStyles.back} onClick={() => navigation(-1)}>&larr; back</button>
          <Board/>
        </>
    )
}
export default Pong;