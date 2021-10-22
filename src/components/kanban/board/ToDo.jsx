import React from 'react';
import Card from '../../cards/Card';
import AddTask from '../actions/AddTask';

const ToDo = () => {
    return (
        <div className='todo-board board'>
            <h2>To do</h2>
            <div className='list-container todo-container'>
                <Card/>

                <AddTask/>
                
            </div>
            {/* .list-container .todo-container */}
        </div>
        // .todo-board .board
    )
}

export default ToDo;