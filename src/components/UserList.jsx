import React from 'react';
import UserRow from './UserRow';
import style from './UserList.module.css';

// users array

const users = [
  {
    name: 'Adrian Donate',
    role: 'front',
    status: false,
  },
  {
    name: 'Liz Aurora',
    role: 'tech',
    status: true,
  },
  {
    name: 'Aurora',
    role: 'PT',
    status: true,
  },
];

const renderedUsers = users.map((user) => (
  <UserRow key={user.name} {...user} onClick={() => console.log('click')} />
));

// component
const UserList = () => {
  return (
    <div className={style.list}>
      <h1>Lista de usuarios</h1>
      {renderedUsers}
    </div>
  );
};
export default UserList;
