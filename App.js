import React, { useRef, useState }  from 'react';
import Wrapper from './Wrapper';
import EmployeeList from './EmployeeList';
import CreateEmployee from './CreateEmployee';

function App() {
  // 배열 비구조화 할당 : 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수
  const [inputs, setInputs] = useState({
    emplyeeName: '',
    email: ''
  });
  // 비구조화 할당을 통해 값 추출
  const { emplyeeName, email } = inputs;
  const onChange = ev => {
    const { name, value } = ev.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [employees, setEmployees] = useState([
    {id: 1, emplyeeName: 'tommy', email: 'tommy@employee.com', active: true},
    {id: 2, emplyeeName: 'jimmy', email: 'jimmy@employee.com', active: false},
    {id: 3, emplyeeName: 'wanda', email: 'wanda@employee.com', active: false},
    {id: 4, emplyeeName: 'lisa', email: 'lisa@employee.com', active: false}
  ]);

  const nextId = useRef(5);
  const onCreate = () => {
    const employee = {
      id: nextId.current,
      emplyeeName,
      email
    };
    // 1. ... 문자가 바로 spread 연산자
    // setEmployees([...employees, employee]);
    // 2. concat 함수는 기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열
    setEmployees(employees.concat(employee));

    setInputs({
      emplyeeName: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    // employee.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = employee.id 가 id 인 것을 제거함
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const onToggle = id => {
    setEmployees(
      employees.map(employee =>
        employee.id === id ? { ...employee, active: !employee.active } : employee
      )
    );
  };

  return (
    // props.children
    <Wrapper>

      <EmployeeList employees={employees} onRemove={onRemove} onToggle={onToggle} />
      <CreateEmployee 
        emplyeeName={emplyeeName}
        email={email}
        onChange={onChange}
        onCreate={onCreate} 
      />

    </Wrapper>
  );
}

export default App;

// import React from 'react';
// import Hello from './Hello';
// import Counter from './Counter';
// import InputSample from './InputSample';
// import InputNames from './InputNames';
// import UserList from './UserList';
// function App() {
//   const employees = [
//     {id: 1, emplyeename: 'tommy', email: 'tommy@employee.com'},
//     {id: 2, emplyeename: 'jimmy', email: 'jimmy@employee.com'},
//     {id: 3, emplyeename: 'wanda', email: 'wanda@employee.com'}
//   ];
//   return (
//     // props.children
//     <Wrapper>
//       <Hello name="react" color="red"></Hello>
//       <Hello color="black"/>
//       <Hello name="react" color="blue" isSpecial="true"/>
//        {/* props 값 설정을 생략하면 true */}
//       <Hello name="react" color="green" isSpecial />
//       <Counter />
//       <InputSample />
//       <InputNames />
//       <UserList />
//       <CreateEmployee />
//       <EmployeeList employees={employees} />
//     </Wrapper>
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://bit.ly/2wMpkk2
// Babel 은 자바스크립트의 문법을 확장해주는 도구입니다. 
// 아직 지원되지 않는 최신 문법이나, 편의상 사용하거나 실험적인 자바스크립트 문법들을 정식 자바스크립트 형태로 변환해줌으로서 
// 구형 브라우저같은 환경에서도 제대로 실행 할 수 있게 해주는 역할을 합니다.

// JSX 지켜주어야 하는 몇가지 규칙
// 1) 꼭 닫혀야 하는 태그
// 2) 꼭 감싸져야하는 태그 : 두개 이상의 태그는 무조건 하나의 태그로 감싸져있어야 합니다. 
//   불필요한 div 로 감싸는게 별로 좋지 않은 상황,
//   table 관련 태그를 작성 할 때에도 내용을 div 같은걸로 감싸기엔 애매할 땐, 리액트의 Fragment 라는 것을 사용
//   이름 없는 div 이면 Fragment 가 만들어지는데, Fragment 는 브라우저 상에서 따로 별도의 엘리먼트로 나타나지 않습니다.
// 3) JSX 안에 자바스크립트 값 사용하기
//   JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 {} 으로 감싸서 보여줍니다.
// 4) style 과 className
//   (1) 라인 스타일은 객체 형태로 작성을 해야 하며, 
//   (2) background-color 처럼 - 로 구분되어 있는 이름들은 backgroundColor 처럼 camelCase 형태로 네이밍 해주어야 합니다.
//   (3) CSS class 를 설정 할 때에는 class= 가 아닌 className= 으로 설정을 해주어야 합니다. 
// 5) 주석
//    JSX 내부의 주석은 {/* 이런 형태로 */} 작성합니다.

// 5. props 를 통해 컴포넌트에게 값 전달하기
// props 는 properties 의 줄임말입니다. 우리가 어떠한 값을 컴포넌트에게 전달해줘야 할 때, props 를 사용합니다.
// props 의 기본 사용법
// 예를 들어서, App 컴포넌트에서 Hello 컴포넌트를 사용 할 때 name 이라는 값을 전달해주고 싶다고 가정해봅시다. 
// 그러면, 이렇게 코드를 작성하면 됩니다.
// in App.js       <Hello name="react" />
// in Hello.js     return <div>안녕하세요 {props.name}</div>

// props.children
// 컴포넌트 태그 사이에 넣은 값을 화면에 보이게 하고 싶을 땐, props.children 사용
// 1) 화면에 보이지 않음
//  <div style={style}>
//  </div>
// 2) 화면에 보임
//  <div style={style}>
//    {children}
//  </div>

// App.js 에서 attribute name,value 을 정한다 => Hello.js나 Wrapper.js 에서 props 사용
// in App.js       <Hello name="react" />
// in Hello.js     return <div>안녕하세요 {props.name}</div>
// Hello.js 나 Wrapper.js 에서 값을 정한다 = props.children
// in Wrapper.js   {children}

// 6. 조건부 렌더링 : 특정 조건에 따라 다른 결과물을 렌더링 하는 것을 의미합니다.
// App 컴포넌트에서 Hello 컴포넌트를 사용 할 때, isSpecial 이라는 props 를 설정
//   isSpecial={true} or isSpecial="true" 모두 가능
// in App.js       <Hello name="react" color="red" isSpecial={true}/>
// Hello 컴포넌트에서는 isSpecial 이 true 이냐 false 이냐에 따라서 컴포넌트의 좌측에 * 표시
// in Hello.js     { isSpecial ? <b>*</b> : null }
// props 값 설정을 생략하면 true

// 7. useState 를 통해 컴포넌트에서 바뀌는 값 관리하기
// 리액트 16.8 에서 Hooks 라는 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었습니다. 
// 이번에는 useState 라는 함수를 사용해보게 되는데, 이게 바로 리액트의 Hooks 중 하나입니다.
// 버튼을 누르면 숫자가 바뀌는 Counter 컴포넌트 : Counter.js
// 1) Counter 에서 버튼이 클릭되는 이벤트가 발생 했을 때, 특정 함수가 호출되도록 설정
//  함수를 만들고, button 의 onClick 으로 각 함수를 연결
//  리액트에서 엘리먼트에 이벤트를 설정해줄때에는 on이벤트이름={실행하고싶은함수} 형태로 설정
//  주의하셔야 하는 점은, 함수형태를 넣어주어야 하지, 함수를 다음과 같이 실행하시면 안됩니다.
//  onClick={onIncrease()}
//  이렇게 하면 렌더링되는 시점에서 함수가 호출되버리기 때문입니다.
//  이벤트를 설정할때에는 함수타입의 값을 넣어주어야 한다는 것, 주의해주세요.
// 2) 동적인 값 끼얹기, useState
//  리액트에 useState 라는 함수을 사용 컴포넌트에서 상태를 관리
//  useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출. 
//  이 함수를 호출해주면 배열이 반환 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수
//   const numberState = useState(0);
//   const number = numberState[0];
//   const setNumber = numberState[1];
//  배열 비구조화 할당을 통하여 각 원소를 추출
//   const [number, setNumber] = useState(0);
//  Setter 함수는 파라미터로 전달 받은 값을 최신 상태로 설정
//   <h1>{number}</h1>
// 3) 함수형 업데이트
//  Setter 함수를 사용 할 때 기존 값을 어떻게 업데이트 할 지에 대한 함수를 등록하는 방식
//   setNumber(prevNumber => prevNumber + 1);
//  컴포넌트를 최적화를 하게 될 때 사용
//  상태값 변경을 배치로 처리

// 8. input 상태 관리하기 : 리액트에서 사용자가 입력 할 수 있는 input 태그의 상태를 관리하는 방법
// 1) input 의 onChange 라는 이벤트를 사용하는데요, 
//  이벤트에 등록하는 함수에서는 이벤트 객체 ev 를 파라미터로 받아와서 사용 할 수 있는데 
//  이 객체의 ev.target 은 이벤트가 발생한 DOM 인 input DOM 을 가르키게됩니다. 
//  이 DOM 의 value 값, 즉 e.target.value 를 조회하면 현재 input 에 입력한 값이 무엇인지 알 수 있습니다.
// 2) input 의 상태를 관리할 때에는 input 태그의 value 값도 설정해주는 것이 중요
//  그렇게 해야, 상태가 바뀌었을때 input 의 내용도 업데이트 됩니다.

// 9. 여러개의 input 상태 관리하기 : inputNames.js
// 단순히 useState 를 여러번 사용하고 onChange 도 여러개 만들어서 구현 할 수 있습니다. 
// 하지만 그 방법은 가장 좋은 방법은 아닙니다
// 더 좋은 방법은, input 에 name 을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 것입니다. 
// 그리고, useState 에서는 문자열이 아니라 객체 형태의 상태를 관리
// 리액트에서 객체를 수정해야 할 때에는 
//  inputs[name] = value;
// 이런식으로 직접 수정하면 안됩니다.
// 그 대신에, 새로운 객체를 만들어서 새로운 객체에 변화를 주고, 이를 상태로 사용해주어야 합니다.
//  spread 문법 : setInputs({...inputs, [name]: value});
// 이러한 작업을, "불변성을 지킨다" 라고 부릅니다. 
// 불변성을 지켜주어야만 리액트 컴포넌트에서 상태가 업데이트가 됐음을 감지 할 수 있고 
// 이에 따라 필요한 리렌더링이 진행됩니다. 만약에 inputs[name] = value 이런식으로 
// 기존 상태를 직접 수정하게 되면, 값을 바꿔도 리렌더링이 되지 않습니다.
//

// 10. useRef 로 특정 DOM 선택하기
// JavaScript에서 특정 DOM 을 선택 getElementById, querySelector 같은 DOM Selector 함수를 사용해서 DOM 을 선택
// 리액트를 사용하는 프로젝트에서도 가끔씩 DOM 을 직접 선택해야 하는 상황이 발생 할 때도 있습니다.
// 예를 들어서 특정 엘리먼트의 크기를 가져와야 한다던지, 스크롤바 위치를 가져오거나 설정해야된다던지, 
// 또는 포커스를 설정해줘야된다던지 등 정말 다양한 상황이 있겠죠. 추가적으로 
// Video.js, JWPlayer 같은 HTML5 Video 관련 라이브러리, 또는 D3, chart.js 같은 그래프 관련 라이브러리 등의 
// 외부 라이브러리를 사용해야 할 때에도 특정 DOM 에다 적용하기 때문에 DOM 을 선택해야 하는 상황이 발생
// 그럴 땐, 리액트에서 ref 라는 것을 사용합니다.
// 함수형 컴포넌트에서 ref 를 사용 할 때에는 useRef 라는 Hook 함수를 사용합니다. 
// 클래스형 컴포넌트에서는 콜백 함수를 사용하거나 React.createRef 라는 함수를 사용하는데, 
// 이에 대해서는 나중에 클래스 컴포넌트를 배울 때 다뤄보도록 하겠습니다. 
// (참고로, 클래스 컴포넌트를 나중에 다루는 이유는, 이제 별로 중요하지 않기 때문입니다.)
// 우리가 만든 InputSample/InputNames 에서는 초기화 버튼을 누르면 포커스가 초기화 버튼에 그대로 남아있게 됩니다.
// 한번, 초기화 버튼을 클릭했을 때 이름 input 에 포커스가 잡히도록 useRef 를 사용하여 기능을 구현해보겠습니다.

// 11. 배열 렌더링하기
//  {id: 1, username: 'velopert', email: 'public.velopert@gmail.com'},
//  {id: 2, username: 'tester', email: 'tester@example.com'},
//  {id: 3, username: 'liz', email: 'liz@example.com'}
// 1) map 함수의 파라미터로는 변화를 주는 함수를 전달
// 2) key props 설정
// Warning: Each child in a list should have a unique "key" prop.
// 리액트에서 배열을 렌더링 할 때에는 key 라는 props 를 설정해야합니다. 
// key 값은 각 원소들마다 가지고 있는 고유값으로 설정을 해야합니다. 
// 만약 배열 안의 원소가 가지고 있는 고유한 값이 없다면 map() 함수를 사용 할 때 설정하는 
// 콜백함수의 두번째 파라미터 index 를 key 로 사용하시면 됩니다.
// 3) key 의 존재유무에 따른 업데이트 방식
// key 가 없을때 : 
//   const array = ['a', 'b', 'c', 'd'];
//   (1) b 와 c 사이에 z 를 삽입 : 기존의 c 가 z 로바뀌고, d 는 c 로 바뀌고, 맨 마지막에 d 가 새로 삽입
//   (2) a 를 제거 : 기존의 a 가 b 로 바뀌고, b 는 z 로 바뀌고, z는 c로 바뀌고, c는 d 로바뀌고, 맨 마지막에 있는 d 가 제거
// key 값이 있을때 : 원하는 곳에 내용을 삽입하거나 삭제
// 중복되는 key 가 있을 때 : 렌더링시에 오류메시지가 콘솔에 나타나게 되며, 업데이트가 제대로 이루어지지 않음

// 12. useRef 로 컴포넌트 안의 변수 만들기
// 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리
// useRef 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않습니다. 
// 리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 
// 업데이트 된 상태를 조회 할 수 있는 반면, useRef 로 관리하고 있는 변수는 설정 후 바로 조회 할 수 있습니다.
//   setTimeout, setInterval 을 통해서 만들어진 id
//   외부 라이브러리를 사용하여 생성된 인스턴스
//   scroll 위치
// employee 배열을 App 에서 선언하고 EmployeeList 에게 props 로 전달+
// useRef() 를 사용 할 때 파라미터를 넣어주면, 이 값이 .current 값의 기본값이 됩니다.
// 그리고 이 값을 수정 할때에는 .current 값을 수정하면 되고 조회 할 때에는 .current 를 조회하면 됩니다.
// 1. 배열에 항목 추가하기 : CreateEmployee.js
//  컴포넌트에서는 상태관리를 부모 컴포넌트인 App 에서 하게 하고 
//  input 의 값 및 이벤트로 등록할 함수들을 props 로 넘겨받아서 사용
//  1) 불변성을 지키면서 배열에 새 항목을 추가하는 방법은 두가지
//    (1) 첫번째는 spread 연산자를 사용
//        setEmployees([...employees, employee]);
//    (2) 또 다른 방법은 concat 함수를 사용
//        setEmployees(employees.concat(employee));    
// 2. 배열에 항목 제거하기
//  Employee 컴포넌트의 삭제 버튼이 클릭 될 때는 employee.id 값을 onRemove 함수의 파라미터로 넣어서 호출
//   employee.id 가 일치하지 않는 원소만 추출해서 새로운 배열을 만듬 = employee.id 가 id 인 것을 제거함
//     const onRemove = id => {setEmployees(employees.filter(employee => employee.id !== id));};
// 3. 배열에 항목 수정하기
//  1) Employee 컴포넌트에 계정명을 클릭했을때 색상이 초록색으로 바뀌고, 다시 누르면 검정색으로 바뀌도록 구현 
//  (1) App 컴포넌트의 employees 배열 안의 객체 안에 active 라는 속성을 추가 
//  (2) Employee 컴포넌트에서 방금 넣어준 active 값에 따라 폰트의 색상을 바꿔주도록 구현  
//      cursor 필드를 설정하여 마우스를 올렸을때 커서가 손가락 모양으로 변하도록
//  (3) App 컴포넌트 onToggle 이라는 함수를 구현
//     배열의 불변성을 유지하면서 배열을 업데이트 할 때에도 map 함수를 사용  
//     id 값을 비교해서 id 가 다르다면 그대로 두고, 같다면 active 값을 반전시키도록 구현
//       setEmployees(employees.map(employee => 
//          employee.id === id ? { ...employee, active: !employee.active } : employee));
//  (4) EmployeeList 컴포넌트에서 onToggle를 받아와서 Employee 에게 전달
//      onClick 에서 id 를 넣어서 onToggle를 호출
//  2) useEffect를 사용하여 마운트/언마운트/업데이트 시 할 작업 설정하기
//   (1) useEffect 라는 Hook 을 사용하여 1. 컴포넌트가 마운트 됐을 때 (처음 나타났을 때) 2. 언마운트 됐을 때 (사라질 때) 
//      3. 업데이트 될 때 (특정 props가 바뀔 때) 특정 작업을 처리
//     (cf) 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열(deps)
//          deps 배열을 비우게 된다면, 컴포넌트가 처음 나타날때에만 useEffect 에 등록한 함수가 호출
//          useEffect 에서는 함수를 반환(cleanup 함수) : deps 가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출
//          (1) 마운트 시에 하는 작업
//            props 로 받은 값을 컴포넌트의 로컬 상태로 설정
//            외부 API 요청 (REST API 등)
//            라이브러리 사용 (D3, Video.js 등...)
//            setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약
//          (2) 언마운트 시에 하는 작업
//            setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
//            라이브러리 인스턴스 제거
//   (2) deps 에 특정 값 넣기 
//     deps 에 특정 값을 넣게 된다면, 컴포넌트가 처음 마운트 될 때에도 호출이 되고, 지정한 값이 바뀔 때에도 호출이 됩니다. 
//     deps 에 특정 값이 있다면 언마운트시에도 호출이되고, 값이 바뀌기 직전에도 호출이 됩니다
//
//
//
//
//
//
//
//
//





























