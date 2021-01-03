import React, { useEffect } from 'react';

function Employee({ employee, onRemove, onToggle }) {
  useEffect(() => {
    // deps = [] : console.log('컴포넌트가 화면에 나타남');
    console.log('employee 값이 설정됨');
    console.log(employee);
    return () => {
      // deps = [] : console.log('컴포넌트가 화면에서 사라짐');
      console.log('employee 가 바뀌기 전..');
      console.log(employee);
    };
  }, [employee]);

  return (
    <div>
      <b style={{
           cursor: 'pointer',
           color: employee.active ? 'green' : 'black'
         }}
         onClick={() => onToggle(employee.id)}         
      >{employee.emplyeeName}</b> 
      <span>({employee.email})</span>
      <button onClick={() => onRemove(employee.id)}>삭제</button>
    </div>
  );
}

function EmployeeList({ employees, onRemove, onToggle }) {
  // map 함수의 파라미터로는 변화를 주는 함수를 전달
  return (
    <div>
      {employees.map(employee => (
        <Employee key={employee.id} 
          employee={employee} 
          onRemove={onRemove}
          onToggle={onToggle} />
       ))}
    </div>
  );
}
  
export default EmployeeList;

// import React from 'react';
