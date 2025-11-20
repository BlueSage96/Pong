import MenuStyles from "styled-components";
import Atari from "../assets/Atari.jpg";
const Screen = MenuStyles.div`
    // background-color: black;
    width: 850px;
    height: 900px;
    border: 3px solid white;
    border-radius: 8px;
    display: flex;
    position: absolute;
    left: 500px;
    top: 25px;
    align-items: center;
    justify-content: center;
`;

const Title = MenuStyles.h1`
    position: absolute;
    top: 0;
    left: 350px;
    font-size: 64px;
`;

const Pic = MenuStyles.img`
    width: 850px;
    height: 900px;
`;

export default function Menu() {
    return (
        <>
          <Screen>
            <Pic src={Atari}/>
            <Title>Pong</Title>
          </Screen>
        </>
    )
}