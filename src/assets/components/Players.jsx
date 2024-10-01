import { useState } from "react";

export default function Players({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing ] = useState( false )
    function handleEditClick(){
        
        setIsEditing((prev) => (!prev))
    }


    function handleChange(e){
        // console.log(e);
        // console.log(e.target.value);
        setPlayerName(e.target.value)
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>
    // let buttonCaption = 'Edit'
    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
        // buttonCaption="Save"
    }

  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {/* {!isEditing ? (<span className="player-name">{name}</span>
        ):(
            <input type="text" />
        )} */}
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>
    </li>
  );
}
