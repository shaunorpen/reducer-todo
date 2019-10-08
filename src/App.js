import React, { useReducer } from 'react';
import uuid from 'uuid';
import moment from 'moment';

import AddTodo from './components/AddTodo';
import ClearCompleted from './components/ClearCompleted';
import TodoList from './components/TodoList';

import {
  initialState,
  ADD_TODO,
  CLEAR_COMPLETED_TASKS,
  UPDATE_TASK_DESCRIPTION,
  TOGGLE_COMPLETE
} from './data/constants';

import reducer from './functions/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo 
        taskDescription={state.taskDescription} 
        dispatch={dispatch} 
        ADD_TODO={ADD_TODO} 
        UPDATE_TASK_DESCRIPTION={UPDATE_TASK_DESCRIPTION} 
      />
      <TodoList 
        todos={state.todos}
        dispatch={dispatch}
        TOGGLE_COMPLETE={TOGGLE_COMPLETE} 
      />
      <ClearCompleted
        dispatch={dispatch} 
        CLEAR_COMPLETED_TASKS={CLEAR_COMPLETED_TASKS}
      />
    </div>
  );
}

export default App;
