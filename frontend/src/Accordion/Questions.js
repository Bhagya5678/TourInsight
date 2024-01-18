import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import classNames from 'classnames';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const containerStyle = {
    maxWidth: showInfo ? '30rem' : 'var(--fixed-width)',
  };

  return (
    <article className={classNames('question', 'p-4', 'border-2', 'border-gray-300', 'mb-4', 'rounded-lg', 'shadow-md')} style={containerStyle}>
      <header className={classNames('flex', 'justify-between', 'items-center')}>
        <h4 className={classNames('text-lg', 'font-semibold')}>{title}</h4>
        <button
          className={classNames('btn', 'w-8', 'h-8', 'bg-gray-300', 'flex', 'items-center', 'justify-center', 'rounded-full', 'text-red-500', 'cursor-pointer', 'ml-4')}
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p className={classNames('text-gray-600', 'mt-2')}>{info}</p>}
    </article>
  );
};

export default Question;
