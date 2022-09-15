import React, { Component } from 'react';

class Menu extends Component {
  constructor() {
    // 사용자가재정의
    super(); // 생성자가 로직을 쓰기전에 반드시 부모를 생성
    console.log('Menu Component 생성자');
    this.model = 'A모델';
  }
  call() {
    //사용자가 정의
    console.log('call function이다');
    return '신세계 react 강의';
  }
  render() {
    this.call();
    return (
      <div>
        <h2>Menu입니다.</h2>
        <nav>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>메서드사용 : {this.call()}</li>
            <li>속성접근 : {this.model}</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
