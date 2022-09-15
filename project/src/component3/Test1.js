import React, { Component } from 'react';

const ShinComponent1 = (args) => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('ShinComponent1...메시지');
  const handleClick = (e) => {
    var aa = e.target.innerHTML;
    setMessage(aa);
    if (aa === '증가') {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>함수형 Component</h1>
      <p>title : {args.title}</p>
      <p>price : {args.price}</p>
      <p>contents : {args.children}</p>
      <button onClick={handleClick}>증가</button>
      <button onClick={handleClick}>감소</button>

      <p>count:{count}</p>
      <p>메시지:{message}</p>
    </div>
  );
};

class ShinComponent2 extends Component {
  constructor() {
    super(); //this사용전에 반드시 super()를 호출한다.
    console.log('ShinComponent2....constructor');
    this.state = { count: 0, message: '메시지초기화,,,,,' };
  }
  handleClick = (e) => {
    var aa = e.target.innerHTML;
    this.setState({ message: aa });
    if (aa === '증가') {
      this.setState({ count: this.state.count + 1 });
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    return (
      <div>
        <h1>클래스형 Componet</h1>
        <p>title : {this.props.title}</p>
        <p>price : {this.props.price}</p>
        <p>contents : {this.props.children}</p>
        <button onClick={this.handleClick}>증가</button>
        <button onClick={this.handleClick}>감소</button>

        <p>count:{this.state.count}</p>
        <p>메시지:{this.state.message}</p>
      </div>
    );
  }
}

const ShinComponent3 = () => {
  const [color, setColor] = useState('purple');
  const [myStyle, setMystyle] = useState({
    color: 'red',
    border: '1px solid red',
  });
  const handleColorChange = (e) => {
    var aa = e.target.innerText;
    setColor(aa);
    setMystyle({ color: aa, border: `1px solid ${aa}` });
  };
  return (
    <div>
      <button onClick={handleColorChange}>RED</button>
      <button onClick={handleColorChange}>GREEN</button>
      <button onClick={handleColorChange}>blue</button>
      <p style={{ color }}>신세계I&C</p>
      <p style={myStyle}>신세계I&C</p>
    </div>
  );
};

const ShinComponent5 = () => {
  const [fruit, setFruit] = useState(['바나나', '사과']);
  const [inputFruit, setInputFruit] = useState('');
  const handleChange = (e) => {
    setInputFruit(e.target.value);
  };
  const handleClick = () => {
    setFruit([...fruit, inputFruit]);
  };
  return (
    <div>
      <input onChange={handleChange} name="name" />
      <button onClick={handleClick}>장바구니담기</button>
      <p>장바구니보기</p>
      <ul>
        {fruit.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const MyTimer = () => {
  const [currentTime, setCurrentTime] = useState('00:00:00');
  const now = () => {
    const date = new Date();
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    setCurrentTime(`${h}:${m}:${s}`);
    console.log('타이머실행');
  };
  useEffect(() => {
    const timer = setTimeout(now, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentTime]);
  return (
    <div>
            <p>{currentTime}</p>   {' '}
    </div>
  );
};

export {
  ShinComponent1 as default,
  ShinComponent2,
  ShinComponent3,
  ShinComponent5,
  MyTimer,
};

// const [showYN, setShowYN] = useState(true);
// {showYN && <MyTimer />}
//       <button onClick={() => setShowYN(!showYN)}>시계중지/시작</button>
//       const RefTest = () => {
//           const nameInput = useRef();
//           const nameInput2 = useRef();
//           const handleClick = () => {
//             nameInput.current.focus();
//           };
//           const handleClick2 = () => {
//             nameInput2.current.focus();
//           };
//           const nextId = useRef(3); //즉각적으로 화면에 display되지않음
//           const [user, setUser] = useState({});
//           const [userlist, setUserlist] = useState([
//             { userid: 1, username: "jin1", email: "zz@gmail.com" },
//             { userid: 2, username: "jin2", email: "yy@gmail.com" },
//           ]);
//           const handleNameChange = (e) => {
//             setUser({ ...user, username: e.target.value });
//           };
//           const handleEmailChange = (e) => {
//             setUser({ ...user, email: e.target.value });
//           };
//           const handleCreate = () => {
//             //useRef의 변수가 변경되어도 rendering을 다시하지않는다...
//             //setUser()와 setUserList()가 비동기이므로 동기적 처리를 위해 추가변수를 사용
//             const aa = { ...user, userid: nextId.current };
//             setUserlist([...userlist, aa]);
//             nextId.current += 1;
//           };
