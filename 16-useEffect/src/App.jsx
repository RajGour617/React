import { useEffect, useState } from 'react'

const App = () => {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(100)

  // useEffect(function () {
  //   console.log('num1 is changing');
  // }, [num1])

    useEffect(function () {
    console.log('useEffect is running...');
  }, [num1, num2])

  return (
    <div>
      <h1>num1: {num1}</h1>
      <h2>num2:{num2}</h2>

      <button onClick={() => {
        setNum1(num1 + 1);
      }}>Change 1</button>

      <button onClick={() => {
        setNum2(num2 + 10);
      }}>Change 2</button>
    </div>
  )
}

export default App