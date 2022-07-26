import React from 'react';
import TodoCard from './TodoCard';

type Props = {};

function TodoList({}: Props) {
  return (
    <section className='flex flex-col gap-2 px-6 border-l border-r mb-4'>
      <TodoCard body='Buy milk for the family' />
      <TodoCard body='Finish individual project' />
      <TodoCard body='Take the dog out' />
    </section>
  );
}

export default TodoList;
