import { useState } from 'react';


const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState('');
  return (
    <div className='py-2 flex justify-between items-center px-3 mt-2 bg-slate-200 rounded-md mb-3'>
      <input
        autoFocus
        placeholder='Add task'
        className='bg-slate-100 p-1.5 rounded-md mr-2'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          onAddTask(text);
        }}
        className='text-blue-500 bg-blue-50 shadow-lg'
      >
        Add
      </button>
    </div>
  );
};
export default AddTask;
