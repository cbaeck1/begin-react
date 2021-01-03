import React, { useState } from 'react';

function Counter() {
  // 배열 비구조화 할당 : 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수
  const [number, setNumber] = useState(0);

  // 함수형 업데이트
  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  const onIncrease2 = () => {
    setNumber(number + 1);
    console.dir("number: "+ number);
  }

  const onDecrease2 = () => {
    setNumber(number - 1);
    console.dir("number: "+ number);
  }  

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onIncrease2}>+1</button>
      <button onClick={onDecrease2}>-1</button>
    </div>
  );
}

// function Counter() {
//   // 배열 비구조화 할당 : 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수
//   const [number, setNumber] = useState(0);
//   const onIncrease = () => {
//     setNumber(number + 1);
//   }
//   const onDecrease = () => {
//     setNumber(number - 1);
//   }
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

// import React from 'react';
// function Counter() {
//   // bind(this) 필요하지 않다
//   const onIncrease = () => {
//     console.log('+1');
//   }
//   const onDecrease = () => {
//     console.log('-1');
//   }
//   return (
//     <div>
//       <h1>0</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

// function Counter() {
//     return (
//       <div>
//         <h1>0</h1>
//         <button>+1</button>
//         <button>-1</button>
//       </div>
//     );
//   }

export default Counter;