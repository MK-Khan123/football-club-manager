import React, { useEffect, useState } from 'react';
import mockData from '../../fakeData/MOCK_DATA.json';
import PlayerData from '../PlayerData/PlayerData';
import TransferCart from '../TransferCart/TransferCart';
import './Auction.css';

const Auction = () => {
    const [playerList, setPlayerList] = useState([]);

    useEffect(() => {
        setPlayerList(mockData);
    }, []);

    const [player, setPlayer] = useState([]);

    const handleAddedPlayer = (addedPlayer) => {
        const newPlayer = [...player, addedPlayer];
        setPlayer(newPlayer);
    }
    return (
        <div className='auction-container'>
            <div className='playerData-container'>
                {
                    playerList.map(player => <PlayerData playerDetails={player} handleAddedPlayer={handleAddedPlayer} key={player.id}></PlayerData>)
                }
            </div>
            <div className='transferCart-container'>
                <TransferCart playersAdded={player}></TransferCart>
            </div>
        </div>
    );
};

export default Auction;