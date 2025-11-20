import MenuStyles from "styled-components";
const Title = MenuStyles.h1`
    position: absolute;
    top: 0;
    font-size: 64px;
`;


export default function Menu() {
    return (
        <>
          <Title>Pong</Title>
        </>
    )
}