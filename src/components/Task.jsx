import { useState } from 'react';

const Task = ({ task, onChangeTask, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className='bg-slate-200 p-1 rounded-sm mr-2'
          value={task.text}
          autoFocus
          onChange={(e) =>
            onChangeTask({
              ...task,
              text: e.target.value,
            })
          }
        />

        <div className='flex gap-2 justify-between items-center'>
          <button
            onClick={() => setIsEditing(false)}
            className='text-green-500  bg-green-100 shadow-lg'
          >
            Edit
          </button>
        </div>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <div className='flex gap-2 justify-between items-center'>
          <button
            onClick={() => setIsEditing(true)}
            className='text-green-500 bg-green-100 shadow-lg'
          >
            Save
          </button>
        </div>
      </>
    );
  }
  return (
    <label className='flex justify-between items-center gap-2'>
      <input
        type='checkbox'
        className='bg-slate-100 p-1 rounded-md mr-2'
        checked={task.done}
        onChange={(e) =>
          onChangeTask({
            ...task,
            done: e.target.checked,
          })
        }
      />
      <div className='flex gap-5 justify-between items-center'>
        {taskContent}
        <button
          onClick={() => onDelete(task.id)}
          className='text-red-500 bg-red-100 shadow-lg'
        >
          Delete
        </button>
      </div>
    </label>
  );
};
export default Task;
