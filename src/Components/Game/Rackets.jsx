// import PongStyle from "../../css/Pong.module.css";
/*
    To move a react-konva shape up and down with keyboard keys, you need to:
    Make the Konva container focusable so it can receive keyboard events.
    Attach a keydown event listener to the container.
    Use React state to manage the shape's position.
    Update the state based on the pressed keys (Up/Down arrows). 
*/
import { useState, useEffect, useRef } from "react";
import { Rect, Layer, Stage} from "react-konva";
export default function Rackets ({ p1, setP1, p2, setP2}) {
  // useStates: position:(optional) -> use setP1 and setP2 in keydown
  //useRef: container and stage refs
  //useEffect: Focus the container div when the component mounts or the stage is clicked
  //set a movement variable
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {/* ref, onKeyDown, onClick - focus state 
                change x & y positions to p1 and p2
            */}
        <Rect x={370} y={300} width={70} height={140} fill="blue" />
        <Rect x={1130} y={300} width={70} height={140} fill="red" />
      </Layer>
    </Stage>
  );
}
