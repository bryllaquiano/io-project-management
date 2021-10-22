import React from 'react';
import { DragCard, TaskSettings } from '../utility/ExportActions';

const Card = () => {
    return (
        <div>
            <div className='card todo-card'>
                <div className='drag'>
                    <DragCard />
                </div>
                <div className='task todo-task'>
                    <h3>Task 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue ante enim, et bibendum turpis posuere eu. Nam sit amet dolor metus.</p>
                    <p>Due date: 01/01/2022</p>
                </div>
                {/* .task .todo-task */}

                <div className='todo-settings task-settings'>
                    <TaskSettings />
                </div>
                {/* .todo-settings .task-settings */}
            </div>
            {/* .card .todo-card */}
        </div>
    )
}

export default Card;