import db from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
  const tasks = await db.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return Response.json({ data: tasks });
};

export const POST = async (req, res) => {
  const data = await req.json();
  const task = await db.task.create({
    data: {
      content: data.content,
    },
  });
  return NextResponse.json({ data: task });
};
