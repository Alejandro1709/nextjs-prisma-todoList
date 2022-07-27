import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Todo } from '@prisma/client';
import ITodo from '../../types/todo';

const prisma = new PrismaClient();

type Data = {
  todos: Todo[];
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'GET') {
    try {
      const todos = await prisma.todo.findMany();
      return res.status(200).json({ todos: todos });
    } catch (error) {
      console.error(error);
    }
  }

  if (req.method === 'POST') {
    const { body } = req.body;

    try {
      const newTodo = await prisma.todo.create({ data: { body } });

      res.status(201).send('Created');
    } catch (error) {
      console.error(error);
    }
  }
};
