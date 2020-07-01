import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import authService from '../../api/services/authService';
import styles from './styles.module.scss';
import UserProfileForm from './../UserProfileForm';
import Image from './../Image/index';

export default () => {
  const [user, setUser] = useState(authService.getCurrentUser());

  if (!user) return <Redirect to="/notfound" />;

  const handleSubmit = (name: string, email: string) => {
    setUser({ ...user, name, email });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.user_info}>
        <div>
          <Image src="PredicateLogo60.png" alt="Predicate Software" />
        </div>
        <div className={styles.credentials}>
          <p className={styles.name}>{user.name}</p>
          <p className="mb-2 mr-2 text-muted">{user.email}</p>
        </div>
      </div>
      <UserProfileForm
        name={user.name}
        email={user.email}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
