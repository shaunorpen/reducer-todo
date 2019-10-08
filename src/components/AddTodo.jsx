import React from 'react';

export default function AddTodo({ taskDescription, UPDATE_TASK_DESCRIPTION, dispatch, ADD_TODO }) {
    return (
        <div>
            <input 
                id='new-todo' 
                placeholder='New task...' 
                value={taskDescription}
                onChange={evt => {
                    return dispatch({ 
                        type: UPDATE_TASK_DESCRIPTION, 
                        payload: evt.target.value 
                    })
                }} />
            <button onClick={evt => dispatch({ type: ADD_TODO })} >Add Todo</button>
        </div>
    );
}