'use client';
import { updateTask } from '@/utils/actions';
import { useEffect } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const initialState = {
  message: null,
};
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className=" btn btn-primary btn-block"
      disabled={pending}
    >
      {pending ? 'please wait..' : 'Edit task'}
    </button>
  );
};
const SingleTaskForm = ({ task }) => {
  const { id, content, completed } = task;
  const [state, formAction] = useFormState(updateTask, initialState);
  const { message } = state;
  useEffect(() => {
    if (message && message === 'success') {
      toast.success('Task updated successfully');
      return;
    }
    if (message && message === 'error') {
      toast.error('Task update failed');
      return;
    }
  }, [state]);
  return (
    <form
      action={formAction}
      className="grid max-w-sm mx-auto my-8 gap-4 rounded-lg shadow-lg p-12"
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        name="content"
        defaultValue={content}
        className="input input-bordered w-full"
        required
      />
      <label htmlFor="completed" className="label cursor-pointer">
        <span className="label-text">completed</span>
        <input
          type="checkbox"
          id="completed"
          name="completed"
          defaultChecked={completed}
          className="checkbox-sm checkbox-secondary"
        />
      </label>
      <SubmitButton />
    </form>
  );
};
export default SingleTaskForm;
