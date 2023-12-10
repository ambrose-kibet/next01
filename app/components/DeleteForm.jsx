'use client';
import { deleteTask } from '../../utils/actions';
import { useFormStatus } from 'react-dom';
const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-error btn-xs" disabled={pending}>
      {pending ? 'please wait...' : 'delete'}
    </button>
  );
};
const DeleteForm = async ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  );
};
export default DeleteForm;
