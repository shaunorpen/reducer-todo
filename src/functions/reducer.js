import {
    ADD_TODO,
    CLEAR_COMPLETED_TASKS,
    UPDATE_TASK_DESCRIPTION,
    TOGGLE_COMPLETE
  } from '../data/constants';

import moment from 'moment';
import uuid from 'uuid';

export default function reducer(state, action) {
    switch (action.type) {
      case UPDATE_TASK_DESCRIPTION:
        return {
          ...state,
          taskDescription: action.payload
        };
      case ADD_TODO:
        return {
          todos: [...state.todos, { 
            id: uuid(), 
            description: state.taskDescription, 
            isComplete: false, 
            completedDate: '' } ],
          taskDescription: '',
        };
      case CLEAR_COMPLETED_TASKS:
        return { 
          ...state,
          todos: state.todos.filter(todo => todo.isComplete === false),
        };
      case TOGGLE_COMPLETE:
          return { 
            ...state,
            todos: state.todos.map(todo => {
              return todo.id === action.payload.id 
                ? {...todo, 
                    isComplete: !todo.isComplete, 
                    completedDate: todo.isComplete ? '' : moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
                  }
                : todo
            })
          };
      default:
        return state;
    }
  }