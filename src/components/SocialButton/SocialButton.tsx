import React from 'react';
import Image from './../Image/index';
import styles from './styles.module.scss';

interface SocialButtonProps {
  src: string;
  alt: string;
  link: string;
}

export default ({ src, alt, link }: SocialButtonProps) => {
  return (
    <div className={styles.social_button_wrapper}>
      <a href={link} target="_blank">
        <Image src={src} alt={alt} />
      </a>
    </div>
  );
};
