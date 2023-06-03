import React from 'react';
import style from './UserRole.module.css';

const ROLES_STYLE = {
  tech: ['Technician', style.tech],
  front: ['FrontEnd Developer', style.frontEnd],
  other: ['Otro', style.other],
};

const UserRole = ({ role }) => {
  const [roleName, roleClass] = ROLES_STYLE[role] || ROLES_STYLE.other;

  return (
    <div className={`${roleClass} ${style.roles}`}>
      <span>{roleName}</span>
    </div>
  );
};

export default UserRole;
