import React, { useState, useRef } from 'react';

function InputNames() {
  // 배열 비구조화 할당 : 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  const nameInput = useRef();
  
  // 비구조화 할당을 통해 값 추출
  const { name, nickname } = inputs; 

  const onChange = (ev) => {
    // ev.target 에서 name 과 value 를 추출
    const { value, name } = ev.target; 
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// function InputNames() {
//   // 배열 비구조화 할당 : 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수
//   const [inputs, setInputs] = useState({
//     name: '',
//     nickname: ''
//   });
//   const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출
//   const onChange = (ev) => {
//     // ev.target 에서 name 과 value 를 추출
//     const { value, name } = ev.target; 
//     setInputs({
//       ...inputs, // 기존의 input 객체를 복사한 뒤
//       [name]: value // name 키를 가진 값을 value 로 설정
//     });
//   };
//   const onReset = () => {
//     setInputs({
//       name: '',
//       nickname: '',
//     })
//   };
//   return (
//     <div>
//       <input name="name" placeholder="이름" onChange={onChange} value={name} />
//       <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
//       <button onClick={onReset}>초기화</button>
//       <div>
//         <b>값: </b>
//         {name} ({nickname})
//       </div>
//     </div>
//   );
// }


// function InputNames() {
//   const onChange = (e) => {
//   };
//   const onReset = () => {
//   };
//   return (
//     <div>
//       <input placeholder="이름" />
//       <input placeholder="닉네임" />
//       <button onClick={onReset}>초기화</button>
//       <div>
//         <b>값: </b>
//         이름 (닉네임)
//       </div>
//     </div>
//   );
// }

export default InputNames;