export default function taskReducer(tasks, action) {
  switch (action.type) {
    case 'added':
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case 'edited':
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));
    case 'deleted':
      return tasks.filter((t) => t.id !== action.id);
    default:
      throw new Error(`Unknown action ${action.type}`);
  }
}
  