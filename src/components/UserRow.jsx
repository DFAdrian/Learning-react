import { React, useState } from 'react';
import style from './UserRow.module.css';
import UserRole from './UserRole';
import UserActive from './UserActive';

const UserRow = ({ name, status, role, ...moreProps }) => {
  const [active, setActive] = useState(status);

  return (
    <div className={style.user} {...moreProps}>
      <div className={style.name}>
        <span>{name}</span>
      </div>
      <UserActive status={active} />
      <UserRole role={role} />
      <button className={style.action} onClick={() => setActive(!active)}>
        {active ? 'Desactivar' : 'Activar'}
      </button>
    </div>
  );
};

export default UserRow;
