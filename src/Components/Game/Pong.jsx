import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Board from "../Board";
import PongStyles from "../../css/Pong.module.css";
import Ball from "./Ball"; 
import Rackets from "./Rackets";

function Pong() {
    const navigation = useNavigate();
    const [p1, setP1] = useState({ x: 370, y: 300 }); 
    const [p2, setP2] = useState({ x: 1130, y: 300 });
    const [ball, setBall] = useState({ x: 300, y: 200 }); //-> bounce.wav for ball!!

    return (
        <>
          <button className={PongStyles.back} onClick={() => navigation(-1)}>&larr; back</button>
          <Board/>
          <Rackets y={p1} setP1={setP1} side="left"/>
          <Rackets y={p2} setP2={setP2} side="right"/>
          <Ball x={ball.x} y={ball.y} setBall={setBall}/>
        </>
    )
}
export default Pong;