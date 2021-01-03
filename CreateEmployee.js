import React from 'react';

function CreateEmployee({ emplyeeName, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="emplyeeName"
        placeholder="계정명"
        onChange={onChange}
        value={emplyeeName}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateEmployee;