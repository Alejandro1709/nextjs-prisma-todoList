import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Todo } from '@prisma/client';
import ITodo from '../../types/todo';

const prisma = new PrismaClient();

type Data = {
  todos: Todo[];
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const todos = await prisma.todo.findMany();
    return res.status(200).json({ todos: todos });
  } catch (error) {
    console.error(error);
  }
};
