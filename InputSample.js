import React, { useState, useRef } from 'react';

function InputSample() {
  // 배열 비구조화 할당 : 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수
  const [text, setText] = useState('');
  
  const textInput = useRef();

  // ev.target = input 
  const onChange = (ev) => {
    setText(ev.target.value);
    console.log("ev.target.value: " + ev.target.value);
  };

  const onReset = () => {
    setText('');
    textInput.current.focus();
  };

  return (
    <div>
      <input onChange={onChange} value={text} ref={textInput} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// function InputSample() {
//   // 배열 비구조화 할당 : 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수
//   const [text, setText] = useState('');
//   // ev.target = input 
//   const onChange = (ev) => {
//     setText(ev.target.value);
//     console.log("ev.target.value: " + ev.target.value);
//   };
//   const onReset = () => {
//     setText('');
//   };
//   return (
//     <div>
//       <input onChange={onChange} value={text}  />
//       <button onClick={onReset}>초기화</button>
//       <div>
//         <b>값: {text}</b>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// function InputSample() {
//   return (
//     <div>
//       <input />
//       <button>초기화</button>
//       <div>
//         <b>값: </b>
//       </div>
//     </div>
//   );
// }

export default InputSample;