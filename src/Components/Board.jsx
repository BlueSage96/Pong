import BoardStyles from 'styled-components';

const BD = BoardStyles.div`
    background-color: black;
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

const Title = BoardStyles.h1`
    position: absolute;
    top: 0;
    font-size: 64px;
`;

const HR = BoardStyles.hr`
    color: white;
    height: 900px;
    outline-style: solid;
    outline-width: 2px;
`;
export default function Board() {
    return(
        <>
          <BD>
             <Title>Pong</Title>
             <HR/>
          </BD>
        </>
    )
}