import React from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import authService from '../../api/services/authService';
import styles from './styles.module.scss';
import Image from './../Image/index';

export default ({ history }: RouteComponentProps) => {
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formImage}>
          <Image src="PredicateLogo150.png" alt="Predicate Cloud" />
        </div>
        <LoginForm history={history} />
      </div>
      {authService.isLoggedIn() && <Redirect to="/" />}
    </>
  );
};
