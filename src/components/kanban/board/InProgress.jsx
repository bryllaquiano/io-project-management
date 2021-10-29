import React from 'react';
import Card from '../../cards/Card';
import AddTask from '../actions/AddTask';

const InProgress = () => {
    return (
        <div className='progress-board board'>
            <h2>In Progress</h2>
            <div className='list-container progress-container'>
                <Card />

                <AddTask />

            </div>
            {/* .list-container .progress-container */}
        </div>
        // .progress-board .board
    )
}
export default InProgress;