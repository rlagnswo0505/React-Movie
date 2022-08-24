import { useState, useEffect } from 'react';

function Hello() {
  useEffect(() => {
    // 컴포넌트가 나타날 때
    console.log('Hello!');

    // clean up : 컴포넌트가 사라질 때
    return () => {
      console.log('Bye!!');
    };
  }, []);
  return (
    <div>
      <strong>Hello!!!</strong>
    </div>
  );
}

export default function Exam6() {
  const [showing, setShowing] = useState(false);
  const onClickBtn = () => {
    setShowing((bool) => !bool);
  };

  return (
    <div>
      <button onClick={onClickBtn}>{showing ? 'hide' : 'show'}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}
