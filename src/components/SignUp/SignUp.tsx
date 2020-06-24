import React from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm';
import authService from '../../api/services/authService';
import styles from './styles.module.scss';
import Image from './../Image/index';

export default ({ history }: RouteComponentProps) => {
  return (
    <>
      <div className={styles.formContainer}>
        <RegisterForm history={history} />
        <div className={styles.formImage}>
          <Image src="PredicateCloudRain300.png" alt="Predicate Cloud" />
        </div>
      </div>
      {authService.isLoggedIn() && <Redirect to="/" />}
    </>
  );
};
