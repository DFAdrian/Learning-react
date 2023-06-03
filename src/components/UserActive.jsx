import React from 'react';
import style from './UserActive.module.css';

const UserActive = ({ status }) => {
  const checkStatus = status ? style.on : style.off;

  return (
    <div className={style.active}>
      <span className={checkStatus}>{status ? 'Online' : 'Offline'}</span>
    </div>
  );
};

export default UserActive;
