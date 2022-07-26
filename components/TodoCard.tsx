import React from 'react';

type Props = {
  body: string;
  completed?: boolean;
};

function TodoCard({ body, completed }: Props) {
  return (
    <div className='card'>
      <div className='card__wrapper flex justify-between p-4 border bg-white'>
        <p className='text-lg font-semibold'>{body}</p>
        <button className='text-blue-600'>
          {completed ? 'Completed' : 'Complete'}
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
