import React from 'react';

type Props = {};

function TodoForm({}: Props) {
  return (
    <section className='p-6 border-l border-r'>
      <form className='flex flex-row bg-white border'>
        <input
          type='text'
          className='ml-2 w-full outline-none'
          placeholder='Buy Tomatoes'
        />
        <input
          type='submit'
          className='p-2 ml-auto bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
          value='Add Todo'
        />
      </form>
      <p className='mt-4 p-2 bg-blue-400 rounded-md text-white select-none'>
        Loading...
      </p>
    </section>
  );
}

export default TodoForm;
