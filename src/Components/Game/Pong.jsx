import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Board from "../Board";
import PongStyles from "../../css/Pong.module.css";
import Ball from "./Ball"; 
import Rackets from "./Rackets";

function Pong() {
    const navigation = useNavigate();
    // const [ball, setBall] = useState({ x: 300, y: 200 }); //-> bounce.wav for ball!!

    return (
        <>
          <button className={PongStyles.back} onClick={() => navigation(-1)}>&larr; back</button>
          <Board/>
          <Rackets/>
          <Ball/>
        </>
    )
}
export default Pong;