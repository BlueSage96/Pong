import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Board from "./Board";
import PongStyles from "../css/Pong.module.css";

function Pong() {
    const navigation = useNavigate();
    const [player, setPlayer] = useState(0);
    const [ball, setBall] = useState({w: 4, h:4,color: "white"});

    /*
        Update ball and player positions and score using functional state updates
        Examples: 
        setBall(prevPos => prevPos + 1);
        setPlayer(play => play + 1);
        setScore(s => s + 1);
    */
    return (
        <>
          <button className={PongStyles.back} onClick={() => navigation(-1)}>&larr; back</button>
          <Board/>
          {/* use onKeyUp OR onKeyDown! */}
        <div className={PongStyles.P1}></div>
        <div className={PongStyles.P2}></div>
        <div className={PongStyles.Ball}></div>
        </>
    )
}
export default Pong;