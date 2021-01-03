import React from 'react';

// 조건부 렌더링
function Hello({ color, name, isSpecial }) {
  return <div style={{color}}>
    { isSpecial ? <b>*</b> : null }
    안녕하세요 {name}</div>
}

// efaultProps 로 기본값 설정
// 컴포넌트에 props 를 지정하지 않았을 때 기본적으로 사용 할 값을 설정
Hello.defaultProps = {
  name: '이름없음'
}

// 비구조화 할당 (혹은 구조 분해)
// props, props.color --> { color, name }, color
// function Hello({ color, name }) {
//   return <div style={{color}}>안녕하세요 {name}</div>
// }

// function Hello(props) {
//   //return <div>안녕하세요 {props.name}</div>
//   const name = props.name
//   const style = {
//     color: props.color
//   }
//   return <div style={style}>안녕하세요 {name}</div>
// }

export default Hello;
