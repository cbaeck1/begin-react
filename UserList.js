import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {id: 1, username: 'react', email: 'react@example.com'},
    {id: 2, username: 'tester', email: 'tester@example.com'},
    {id: 3, username: 'liz', email: 'liz@example.com'}
  ];
  // map 함수의 파라미터로는 변화를 주는 함수를 전달
  // Warning: Each child in a list should have a unique "key" prop.
  return (
    <div>
      {users.map(user => (<User key={user.id} user={user} />))}
    </div>
  );
}

// function UserList() {
//   const users = [
//     {id: 1, username: 'react', email: 'react@example.com'},
//     {id: 2, username: 'tester', email: 'tester@example.com'},
//     {id: 3, username: 'liz', email: 'liz@example.com'}
//   ];
//   let userLists = [];
//   let i = 0;
//   while (i < users.length) {
//     userLists.push(<User key={users[i].id} user={users[i]} />);
//     i += 1;
//   }    
//   return (
//     <div>
//       {userLists}
//     </div>
//   );
// }

// function UserList() {
//   const users = [
//     {id: 1, username: 'react', email: 'react@example.com'},
//     {id: 2, username: 'tester', email: 'tester@example.com'},
//     {id: 3, username: 'liz', email: 'liz@example.com'}
//   ];
//   return (
//     <div>
//        <User user={users[0]} />
//        <User user={users[1]} />
//        <User user={users[2]} />
//     </div>
//   );
// }


// function UserList() {
//   const users = [
//     {id: 1, username: 'react', email: 'react@example.com'},
//     {id: 2, username: 'tester', email: 'tester@example.com'},
//     {id: 3, username: 'liz', email: 'liz@example.com'}
//   ];
//   return (
//     <div>
//       <div>
//         <b>{users[0].username}</b> <span>({users[0].email})</span>
//       </div>
//       <div>
//         <b>{users[1].username}</b> <span>({users[1].email})</span>
//       </div>
//       <div>
//         <b>{users[2].username}</b> <span>({users[1].email})</span>
//       </div>
//     </div>
//   );
// }
  
export default UserList;