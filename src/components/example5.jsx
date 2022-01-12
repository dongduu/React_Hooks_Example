import React from "react";

export default function Example5() {
  const [count, setCount] = React.useState(0);

  // componentDidMount
  React.useEffect(() => {
    console.log("componentDidMount");
  }, []); // 두 가지 일을 다 해버림 똑똑이

  // componentDidMount & componentDidUpdate
  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);
  }, [count]); // 여러 개 사용 가능(순차적으로 실행 됨)

  // componentWillUnmount
  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);

    return () => {
      // cleanUp
      console.log("cleanup by count", count);
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me!</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}
