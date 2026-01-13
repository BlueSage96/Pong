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
export default function Rackets ({ isP1, setIsP1, isP2, setIsP2 }) {
  // useStates: position:(optional) -> use setP1 and setP2 in keydown
  const [position, setPosition] = useState({ x: 300, y: 300 });

  //useRef: container ref
  const posRef = useRef(null);

  //set a movement variable
  const movement = 5;

  //Focus the container div when the component mounts or the stage is clicked
  useEffect(() => {
    if (posRef.current) posRef.current.focus();
    //add cleanup function!
  },[]);

  // functions for keyDown movement 
const onKeyDown = (event) => {
   const key = event.keyCode;
   //switch case - need to assign keys for each racket (setP1 & setP2)!!
   switch (key) {
      //up arrow
      case 38: 
        setPosition(prev => prev * movement); //state updater function - check notes
        console.log("Up");
        event.preventDefault();
        break;
      //down arrow
      case 40:
        setPosition(prev => prev * movement); //state updater function - check notes
        console.log("Down");
        event.preventDefault();
        break;
      //87 - w and 83 - s
   }
   event.preventDefault();
}

  //onClick function - focus!!
  const focusPosRef = () => {
      if (posRef.current) posRef.current.focus();
  }
  return (
    <>
      <div onClick={focusPosRef} ref={posRef} onKeyDown={onKeyDown}>
        {/* Might have to change later */}
        <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {/* original values: 1025 for red's x position, everything else was 300*/}
        <Rect x={position.x} y={position.y} width={70} height={140} fill="blue" stroke="white" 
        cornerRadius={6} />
        <Rect x={position.x + 725} y={position.y} width={70} height={140} fill="red" stroke="white" cornerRadius={6}/>
      </Layer>
    </Stage>
      </div>
    </>
    
  );
}
