import React from 'react';

import AddTodo from './components/AddTodo';
import Search from './components/Search';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo />
      <Search />
      <TodoList />
    </div>
  );
}

export default App;
