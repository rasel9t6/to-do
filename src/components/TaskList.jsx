import Task from './Task';

const TaskList = ({ tasks, onChangeTask, onDelete }) => {
  return (
    <>
      <ul className='py-3 px-5 mt-2 bg-slate-200 rounded-md'>
        {tasks.map((task) => (
          <li
            key={task.id}
            className='border-b font-bold py-3 px-5 bg-slate-50 rounded-sm border-slate-300'
          >
            <Task
              task={task}
              onChangeTask={onChangeTask}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default TaskList;
