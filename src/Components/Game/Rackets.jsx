import { useState, useEffect, useRef } from "react";
import { Rect, Layer, Stage} from "react-konva";

const Rackets = () => {
  const [positionP1, setPositionP1] = useState({ x: 300, y: 300 });
  const [positionP2, setPositionP2] = useState({ x: 300, y: 300 });

  const stageRef = useRef(null);
  const containerRef = useRef(null);

  const movement = 8;
  let speed = 4;

  //Focus the container div when the component mounts or the stage is clicked
  useEffect(() => {
    if (containerRef.current) containerRef.current.focus();
    //add cleanup function!
  },[]);

  // functions for racket movement 
const handleKeyDown = (event) => {
   let key = event.key;
   switch (key) {
      case "ArrowUp": 
        setPositionP2((prev) => ({ ...prev, y: prev.y - movement * speed }));
        console.log("Up");
        break;
      case "W":
      case "w":
         //state updater function
        setPositionP1((prev) => ({ ...prev, y: prev.y - movement * speed }));
        console.log("W or w");
        break;
      //down arrow
      case "ArrowDown":
          setPositionP2((prev) => ({ ...prev, y: prev.y + movement * speed }))
        console.log("Down");
        break;
      case "S":
      case "s":
        setPositionP1((prev) => ({ ...prev, y: prev.y + movement * speed }))
        console.log("S or s");
        break;
      default: 
       return;
   }
   event.preventDefault();
}

  //onClick function - focus!!
  const focusStage = () => {
      if (containerRef.current) containerRef.current.focus();
  }
  return (
    <>
    {/* tabIndex is needed to make the key focusable */}
      <div onClick={focusStage} ref={containerRef} onKeyDown={handleKeyDown} tabIndex={0}>
        {/* Might have to change later */}
        <Stage width={window.innerWidth} height={window.innerHeight} ref={stageRef}>
      <Layer>
        {/* original values: 1025 for red's x position, everything else was 300*/}
        <Rect x={positionP1.x} y={positionP1.y} width={70} height={140} fill="blue" stroke="white" 
        cornerRadius={6} onKeyDown={positionP1}/>
        <Rect x={positionP2.x + 725} y={positionP2.y} width={70} height={140} fill="red" stroke="white" 
        cornerRadius={6} onKeyDown={positionP2} />
      </Layer>
    </Stage>
      </div>
    </>
    
  );
}
export default Rackets;
