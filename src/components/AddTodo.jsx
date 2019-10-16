import React from 'react';

export default function AddTodo({ taskDescription, UPDATE_TASK_DESCRIPTION, dispatch, ADD_TODO }) {
    return (
        <div id='add-todo'>
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
            <button onClick={evt => taskDescription 
                ? dispatch({ type: ADD_TODO }) 
                : alert('Please input a task description')} >Add Todo</button>
        </div>
    );
}