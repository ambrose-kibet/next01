import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
export const dynamic = 'force-dynamic';
const TasksPage = () => {
  return (
    <div className=" w-full max-w-sm grid gap-4 shadow-lg m-auto mt-10">
      <TaskForm />
      <TaskList />
    </div>
  );
};
export default TasksPage;
