import React from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import authService from '../../api/services/authService';
import styles from './styles.module.scss';

export default ({ history }: RouteComponentProps) => {
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formImage}>
          <img
            src="images/PredicateLogo.png"
            alt="Predicate Cloud"
            title="Predicate Cloud"
            width="150px"
            height="150px"
          />
        </div>
        <LoginForm history={history} />
      </div>
      {authService.isLoggedIn() && <Redirect to="/" />}
    </>
  );
};
