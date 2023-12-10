import SingleTaskForm from '@/app/components/SingleTaskForm';
import { getSingleTask } from '@/utils/actions';
import Link from 'next/link';

const EditTaskPage = async ({ params }) => {
  const task = await getSingleTask(params.id);
  return (
    <div className="my-6">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href={'/tasks'}>Back to Tasks</Link>
          </li>
        </ul>
      </div>
      <SingleTaskForm task={task} />
    </div>
  );
};
export default EditTaskPage;
