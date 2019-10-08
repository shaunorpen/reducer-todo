import React from 'react';

export default function ClearCompleted(props) {
    return (
        <div>
            <button onClick={e => props.dispatch({ type:props.CLEAR_COMPLETED_TASKS })}>Clear Completed Tasks</button>
        </div>
    );
}