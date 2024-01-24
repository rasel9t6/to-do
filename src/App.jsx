import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { initialTasks } from './data/data.js';
import { useReducer } from 'react';
import taskReducer from './reducers/taskReducer.js';
function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const getNextId = (data) => {
    const maxId = data.reduce((prev, curr) =>
      prev && prev.id > curr.id ? prev.id : curr.id
    );
    return maxId + 1;
  };
  function handleAddTask(text) {
    if (text === '') return;
    dispatch({
      type: 'added',
      text,
      id: getNextId(tasks),
    });
  }
  function handleEditTask(task) {
    dispatch({
      type: 'edited',
      task,
    });
  }
  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }
  return (
    <>
      <h1 className='border-b-2 py-3 text-slate-700 rounded-md font-bold bg-slate-400 mb-8'>
        To Do
      </h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleEditTask}
        onDelete={handleDeleteTask}
      />
    </>
  );
}

export default App;
