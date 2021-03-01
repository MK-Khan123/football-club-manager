import React from 'react';
import './TransferCart.css';

const TransferCart = (props) => {
    const playersAdded = props.playersAdded;
    const totalSalary = playersAdded.reduce((total, player) => total + player.salary, 0);

    return (
        <div className='transfer-area'>
            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Transfer Summary</h3>
            <h4>No. of players selected: {playersAdded.length}</h4>
            <h5>Selected players</h5>
            <p>{playersAdded.map(player => <li>{player.name} (${player.salary})</li>)}</p>
            <h5>Total Budget: ${totalSalary}</h5>
        </div>
    );
};

export default TransferCart;