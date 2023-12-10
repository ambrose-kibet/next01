'use client';
import { createTask } from '@/utils/actions';
import { useEffect } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-primary join-item" disabled={pending}>
      {pending ? 'please wait..' : 'Add Task'}
    </button>
  );
};
const initialState = {
  message: null,
};
const TaskForm = async () => {
  const [state, fromAction] = useFormState(createTask, initialState);
  useEffect(() => {
    if (state.message) {
      if (state.message === 'success') {
        toast.success('Task Added Successfully');
        return;
      }
      if (state.message === 'error') {
        toast.error('Something went wrong');
        return;
      }
    }
  }, [state]);
  return (
    <form action={fromAction}>
      <div className="join w-full my-4">
        <input
          type="text"
          id="content"
          name="content"
          placeholder="Enter Task Here"
          className="input input-bordered join-item w-full"
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
};
export default TaskForm;
