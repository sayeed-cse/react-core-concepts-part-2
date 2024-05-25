import { useState } from "react"

export default function Player() {

    const [playerCount, setPlayer] = useState(0);

    const addPlayer = () => {
        const newPlayerCount = playerCount +1;

        setPlayer(newPlayerCount);
    }
    const removePlayer = () =>{
        const newPlayerCount = playerCount -1;
        setPlayer(newPlayerCount);
    }
    // style
    const playerBox = {
        border: '1px solid green',
        padding: '25px',
        margin: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={playerBox}>
            <h3>Football Player : {playerCount}</h3>
            <button onClick={addPlayer} style={{color: 'green'}}>Add Player</button>
            <button onClick={removePlayer} style={{marginLeft: '10px',color: 'red'}}>Remove Player</button>
        </div>
    )
}