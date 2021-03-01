import React from 'react';
import './PlayerData.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const PlayerData = (props) => {
    const playerDetails = props.playerDetails;
    const { name, club, salary, img } = playerDetails; //Object Destructuring used for bonus mark.
    const handleAddedPlayer = props.handleAddedPlayer;
    return (
        <div className='player-card'>
            <div className='player'>
                <img src={img} alt="" />
            </div>
            <div className='player-info'>
                <h4>Name: {name}</h4>
                <h5>Club name: {club}</h5>
                <h6>Salary: ${salary}</h6>
                <button onClick={() => handleAddedPlayer(playerDetails)} className='add-button'

                >
                    <FontAwesomeIcon icon={faPlus} /> <b>Add Player</b></button> {/*Font Awesome Icon used for bonus mark*/}
            </div>
        </div>
    );
};

export default PlayerData;