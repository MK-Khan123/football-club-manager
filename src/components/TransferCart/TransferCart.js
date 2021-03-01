import React from 'react';
import './TransferCart.css';

const TransferCart = (props) => {
    const playersAdded = props.playersAdded;
    console.log(playersAdded);
    const totalSalary = playersAdded.reduce((total, player) => total + player.salary, 0);

    return (
        <div className='transfer-area'>
            <h4>No. of players selected: {playersAdded.length}</h4>
            <h5>Selected players</h5>
            <p>{playersAdded.map(player => <li>{player.name}</li>)}</p>
            <h5>Total Budget: ${totalSalary}</h5>
        </div>
    );
};

export default TransferCart;