import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { initialTasks } from './data/data.js';
import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const getNextId = (data) => {
    const maxId = data.reduce((prev, curr) =>
      prev && prev.id > curr.id ? prev.id : curr.id
    );
    return maxId + 1;
  };
  function handleAddTask(text) {

    // নিচের if কনডিশনে ইনপুট ফিল্ড খালি থাকলে নতুন টাস্ক অবজেক্ট ক্রিয়েট করার পূর্বেই কনডিশন চেক করে রিটার্ন করা হয়েছে।
    
    if (text === '') return; 
    setTasks([
      ...tasks,
      {
        id: getNextId,
        text: text,
        done: false,
      },
    ]);
  }
  function handleEditTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }
  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
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
