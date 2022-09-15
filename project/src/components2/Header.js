import React from 'react';

const Header = () => {
  var a = 100;
  const b = 200;
  a++;
  return (
    <header>
      {/* JSX : 반드시 하나의 root를 가진다 */}
      <h1>반갑습니다!</h1>
      <h2>React 배우기 전 선수 지식은?</h2>
      <p>a={a}</p>
      <p>b={b}</p>
    </header>
  );
};

export default Header;
