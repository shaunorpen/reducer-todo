import React from 'react';

export default function Todo(props) {
    return (
        <div class='todo'>
            <input 
                type='checkbox' 
                value={props.id.toString()}  
                defaultChecked={props.isComplete}
                onClick={() => props.dispatch({ type: props.TOGGLE_COMPLETE, payload: { id: props.id } })} />
            <span>{props.description}</span>
            <span>{props.completedDate ? ' - Completed ' + props.completedDate: null}</span>
        </div>
    );
}