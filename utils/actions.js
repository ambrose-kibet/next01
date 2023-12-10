'use server';

import { revalidatePath } from 'next/cache';
import prisma from './db';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import toast from 'react-hot-toast';
export const createTask = async (prevState, formData) => {
  const content = formData.get('content');
  const schema = z.object({
    content: z.string().min(3).max(100),
  });
  try {
    schema.parse({ content });
    const task = await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath('/tasks');
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'error' };
  }
};
export const deleteTask = async (formData) => {
  const id = formData.get('id');
  const task = await prisma.task.delete({
    where: {
      id,
    },
  });

  revalidatePath('/tasks');
};

export const getSingleTask = async (id) => {
  const task = await prisma.task.findUnique({
    where: {
      id,
    },
  });

  return task;
};

export const updateTask = async (prevState, formData) => {
  const id = formData.get('id');
  const content = formData.get('content');
  const completed = formData.get('completed');
  const schema = z.object({
    content: z.string().min(3).max(100),
  });
  try {
    schema.parse({ content });
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        content,
        completed: completed === 'on' ? true : false,
      },
    });
    revalidatePath('/tasks');
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'error' };
  }
};
