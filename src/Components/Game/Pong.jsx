import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Board from "../Board";
import PongStyles from "../../css/Pong.module.css";
import Ball from "./Ball"; 
import Rackets from "./Rackets";

function Pong() {
    const navigation = useNavigate();
    const [isP1, setIsP1] = useState(false); 
    const [isP2, setIsP2] = useState(false);
    // const [ball, setBall] = useState({ x: 300, y: 200 }); //-> bounce.wav for ball!!

    return (
        <>
          <button className={PongStyles.back} onClick={() => navigation(-1)}>&larr; back</button>
          <Board/>
          <Rackets isP1={isP1} setIsP1={setIsP1} isP2={isP2} setIsP2={setIsP2}/>
          {/* <Rackets y={p1} setP1={setP1} side="left"/>
          <Rackets y={p2} setP2={setP2} side="right"/>  */}
          <Ball/>
        </>
    )
}
export default Pong;