import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Questions';
function Apps() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h1 className="text-center text-4xl font-bold text-black">FAQ's</h1>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Apps;