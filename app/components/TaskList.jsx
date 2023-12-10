import prisma from '@/utils/db';
import Link from 'next/link';
import DeleteForm from './DeleteForm';

const getTasks = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return tasks;
};

const TaskList = async () => {
  const tasks = await getTasks();
  if (tasks.length === 0) {
    return <h2 className="text-lg text-center">There are no tasks</h2>;
  }

  return (
    <ul className=" w-full grid gap-6">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between border border-base-100 shadow-md rounded-md px-4"
        >
          <span className={`text-lg ${task.completed ? 'line-through' : null}`}>
            {task.content}
          </span>
          <div className="flex gap-6 items-center">
            <Link href={`/tasks/${task.id}`} className=" btn btn-accent btn-xs">
              edit
            </Link>
            <DeleteForm id={task.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
