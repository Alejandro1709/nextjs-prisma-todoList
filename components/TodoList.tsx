import React from 'react';
import TodoCard from './TodoCard';
import Todo from '../types/todo';

const myTodos: Array<Todo> = [
  {
    id: 1,
    body: 'Buy milk for the family',
    completed: false,
  },
  {
    id: 2,
    body: 'Finish extended project',
    completed: false,
  },
  {
    id: 3,
    body: 'Take the trash out',
    completed: false,
  },
];

function TodoList() {
  return (
    <section className='flex flex-col gap-2 px-6 border-l border-r mb-4'>
      {myTodos.length > 0 ? (
        myTodos.map((todo) => <TodoCard key={todo.id} body={todo.body} />)
      ) : (
        <p>No Todos were found...</p>
      )}
    </section>
  );
}

export default TodoList;
