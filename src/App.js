import React, { useReducer } from 'react';
import uuid from 'uuid';
import moment from 'moment';

import AddTodo from './components/AddTodo';
import ClearCompleted from './components/ClearCompleted';
import TodoList from './components/TodoList';

const initialState = {
  todos: [
    {
      id: uuid(),
      description: 'Learn HTML',
      isComplete: true,
      completedDate: '',
    },
    {
      id: uuid(),
      description: 'Learn CSS',
      isComplete: false,
      completedDate: '',
    },
    {
      id: uuid(),
      description: 'Learn JavaScript',
      isComplete: false,
      completedDate: '',
    },
  ],
  taskDescription: '',
}

const ADD_TODO = 'ADD_TODO';
const CLEAR_COMPLETED_TASKS = 'CLEAR_COMPLETED_TASKS';
const UPDATE_TASK_DESCRIPTION = 'UPDATE_TASK_DESCRIPTION';
const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

function reducer(state, action) {
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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList 
        todos={state.todos}
        dispatch={dispatch}
        TOGGLE_COMPLETE={TOGGLE_COMPLETE} 
      />
      <AddTodo 
        taskDescription={state.taskDescription} 
        dispatch={dispatch} 
        ADD_TODO={ADD_TODO} 
        UPDATE_TASK_DESCRIPTION={UPDATE_TASK_DESCRIPTION} 
      />
      <ClearCompleted
        dispatch={dispatch} 
        CLEAR_COMPLETED_TASKS={CLEAR_COMPLETED_TASKS}
      />
    </div>
  );
}

export default App;
