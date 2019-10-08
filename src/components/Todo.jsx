import React from 'react';

export default function Todo(props) {
    return (
        <div>
            <input type='checkbox' value={props.id.toString()}  checked={props.isComplete} />
            <span>{props.description}</span>
        </div>
    );
}