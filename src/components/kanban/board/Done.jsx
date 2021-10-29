import React from 'react';
import Card from '../../cards/Card';
import AddTask from '../actions/AddTask';

const Done = () => {
    return (
        <div className='done-board board'>
            <h2>Done</h2>
            <div className='list-container done-container'>
                <Card />

                <AddTask />
            </div>
            {/* .list-container .done-container */}
        </div>
        // .done-board .board
    )
}
export default Done;