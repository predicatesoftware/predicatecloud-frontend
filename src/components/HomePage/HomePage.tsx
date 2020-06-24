import React from 'react';
import styles from './styles.module.scss';
import NetworkLayers from './../NetworkLayers';
import InfoCard from './../InfoCard/index';
import { RouteComponentProps } from 'react-router-dom';

export default ({ history }: RouteComponentProps) => {
  return (
    <>
      <h2 className={styles.cl}>Meet Predicate.Cloud</h2>
      <h1>
        Machine learning
        <br />
        at the <span>speed of light</span>.
      </h1>
      <div className={styles.features_container}>
        <div className={styles.features}>
          <p>
            Unprecedented performance
            <br />
            for your most demanding tasks.
          </p>
          <p>
            Most advanced tools in the field of
            <br />
            Machine Learning and Data Science.
          </p>
          <p>
            Intuitive model building and training
            <br />
            with a level of performance never seen before.
          </p>
          <p>Adjustable to projects of any complexity.</p>
        </div>
        <NetworkLayers />
      </div>
      <div className={styles.cards_container}>
        <InfoCard
          caption="Register your account"
          buttonCaption="Register now"
          onClick={() => history.push('/register')}
        >
          Get early access to the latest versions of Predicate.ML and
          Predicate.Cloud
        </InfoCard>
        <InfoCard
          caption="Try the library now for free"
          buttonCaption="Try it now"
        >
          Get familiar with all the new features. Now with C++ 20.
        </InfoCard>
        <InfoCard caption="Join the community" buttonCaption="Join now">
          Subscribe to our Twitter account to make sure you don't miss new
          releases.
        </InfoCard>
      </div>
    </>
  );
};
