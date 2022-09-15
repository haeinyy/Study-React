import React from 'react';

const Contents = () => {
  var a = 100;
  const title = 'react배우기';
  const arr = ['커피', '사과', '귤'];
  return (
    <>
      <h1>Contents 입니다.</h1>
      <section>
        <article>
          <h1>React 학습</h1>
          <p>Props</p>
          <p>state</p>
          <p>Component</p>
          <hr></hr>
        </article>
      </section>
    </>
  );
};

export default Contents;
