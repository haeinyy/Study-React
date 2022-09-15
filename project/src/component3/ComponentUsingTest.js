import React from 'react';
import ShinComponent1, { ShinComponent2 } from './Test1';

const ComponentUsingTest = () => {
  return (
    <div>
      <ShinComponent1 title="리액트1" price="20000">
        컴포넌트1
      </ShinComponent1>
      <ShinComponent2 title="리액트2" price="30000">
        퀌포넌트2
      </ShinComponent2>
    </div>
  );
};

export default ComponentUsingTest;
