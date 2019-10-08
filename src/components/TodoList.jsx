import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
    return (
        <div>
            {
                props.todos.map(todo => <Todo 
                                            {...todo} 
                                            key={todo.id}
                                            dispatch={props.dispatch}
                                            TOGGLE_COMPLETE={props.TOGGLE_COMPLETE} />)
            }
        </div>
    );
}