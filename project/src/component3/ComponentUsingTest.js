import React from 'react';
import ShinComponent1, { ShinComponent2 } from './Test1';

const ComponentUsingTest = () => {
  return (
    <div>
      <ShinComponent1 title="리액트1" price="20000">
        컴포넌트1
      </ShinComponent1>
      <ShinComponent2 title="리액트2" price="30000">
        컴포넌트2
      </ShinComponent2>
    </div>
  );
};

// const CallbackTest = () => {
//   const [count, setCount] = useState(0);
//   const [toggle, setToggle] = useState(true);
//   /* const upHandler = () => {setCount(count + 1); }; */
//   //최초한번만 함수를 만듦
//   /* const upHandler = useCallback(() => {
//       setCount(count + 1);
//      }, []); */
//   //count가 변경시에는 함수 다시 만들고 다른 상태값 변경시에는 저장된 함수를 재사용
//   const upHandler = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);
//   useEffect(() => {
//     console.log('upHandler가 변경됨');
//   }, [upHandler]);
//   return (
//     <div>
//       <p>count:{count}</p>
//       <button onClick={upHandler}>증가</button>
//       <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
//     </div>
//   );
// };

export { ComponentUsingTest as default };
