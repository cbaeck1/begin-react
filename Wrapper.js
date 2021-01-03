import React from 'react';

// 비구조화 할당 (혹은 구조 분해)
// props, props.children -> {children}, children
function Wrapper({ children }) {
  const style = {
    border: '4px solid blueviolet',
    margin: '1rem',
    color: 'Bule',
    padding: '1rem',
    marginBottom: '1rem',
  };
  return (
    <div style={style}>
      {children}
    </div>
  )
}

// function Wrapper() {
//   const style = {
//     border: '4px solid blueviolet',
//     margin: '1rem',
//     color: 'Bule',
//     padding: '1rem',
//     marginBottom: '1rem',
//   };
//   return (
//     <div style={style}>    
//     </div>
//   )
// }

export default Wrapper;