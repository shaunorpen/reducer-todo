import uuid from 'uuid';

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

export {
    initialState,
    ADD_TODO,
    CLEAR_COMPLETED_TASKS,
    UPDATE_TASK_DESCRIPTION,
    TOGGLE_COMPLETE
}