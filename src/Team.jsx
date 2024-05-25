import { useState } from "react"

export default function Team() {
    const [members, setMembers] = useState(0);
    console.log(setMembers)
    const handleAdd = () => {
        const newMembers = members + 1;
        setMembers(newMembers);
    }

    const handleRemove = () => {
        const newMembers = members - 1;
        setMembers(newMembers);
    }

    // style
    const teamStyle = {
        border: '2px solid orangered',
        borderRadius: '10px',
        padding: '15px',
        margin: '15px',
        boxShadow: '1px 1px 15px orangered',
    }
    return (
        <>
            <div style={teamStyle}>
                <h3>Team Members: {members}</h3>
                <button onClick={handleAdd}>Add Member</button>
                <button onClick={handleRemove} style={{ marginLeft: '10px' }}>Remove Member</button>
            </div>
        </>
    )
}