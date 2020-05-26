import React, { useState } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm';
import authService from '../../api/services/authService';
import styles from './styles.module.scss';

export default ({ history }: RouteComponentProps) => {
  return (
    <>
      <div className={styles.formContainer}>
        <RegisterForm history={history} />
        <div className={styles.formImage}>
          <img
            src="images/PredicateCloudRain.png"
            alt="Predicate Cloud"
            title="Predicate Cloud"
            width="300px"
            height="280px"
          />
        </div>
      </div>
      {authService.isLoggedIn() && <Redirect to="/" />}
    </>
  );
};
