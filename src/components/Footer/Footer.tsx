import React from 'react';
import styles from './styles.module.scss';
import Image from './../Image';
import SocialButton from './../SocialButton/index';

export default () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.company_container}>
            <Image src="PredicateLogo60.png" alt="Logo" />
            <div className={styles.company_name_wrapper}>
              <p>© 2019–{year} Predicate Software</p>
            </div>
          </div>
          <div className={styles.socials_container}>
            <SocialButton
              src="GitHub35.png"
              alt="GitHub"
              link="https://github.com/predicatesoftware"
            />
            <SocialButton
              src="Twitter35.png"
              alt="Twitter"
              link="https://twitter.com/predicateinc"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
