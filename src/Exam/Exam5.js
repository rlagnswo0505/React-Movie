import { useState, useEffect } from 'react';

export default function Exam5() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');

  // 리액트 hook : vue 라이프 사이클과 비슷합
  useEffect(() => {
    if (keyword.length > 5) {
      console.log('AAA');
    }
  }, [keyword]);

  function countUp() {
    setCounter((val) => val + 1);
  }
  function countDown() {
    if (counter > 0) {
      setCounter((val) => val - 1);
    }
  }
  const onChangeText = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div>
      <input type="text" name="" placeholder="Search here..." value={keyword} onChange={onChangeText} id="" />
      <h1>{counter}</h1>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
}
