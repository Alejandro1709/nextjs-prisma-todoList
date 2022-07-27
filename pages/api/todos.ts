import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
  try {
    const todos = await prisma.todo.findMany();
    return res.status(200).json(todos);
  } catch (error) {
    console.error(error);
  }
};
