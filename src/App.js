import React, { useReducer } from 'react';

import AddTodo from './components/AddTodo';
import Search from './components/Search';
import TodoList from './components/TodoList';

const initialState = [
  {
    id: 1,
    description: 'Learn HTML',
    isComplete: true
  },
  {
    id: 2,
    description: 'Learn CSS',
    isComplete: false
  },
  {
    id: 3,
    description: 'Learn JavaScript',
    isComplete: false
  },
]

const ADD_TASK = 'ADD_TASK';
const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
const FIND_TASK = 'FIND_TASK';

function reducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      return state;
    case TOGGLE_COMPLETE:
      return state;
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Search />
      <TodoList todos={todos} />
      <AddTodo />
    </div>
  );
}

export default App;
