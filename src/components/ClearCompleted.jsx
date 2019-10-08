import React from 'react';

export default function ClearCompleted(props) {
    return (
        <div id='clear-completed-tasks'>
            <button 
                onClick={e => props.dispatch({ type:props.CLEAR_COMPLETED_TASKS })}
                id='clear-button'>Clear Completed Tasks</button>
        </div>
    );
}