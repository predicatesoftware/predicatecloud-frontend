import React from 'react';
import styles from './styles.module.scss';
import { Button } from 'reactstrap';
import classnames from 'classnames';

interface InfoCardProps {
  caption: string;
  buttonCaption: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default ({
  caption,
  buttonCaption,
  children,
  onClick,
}: InfoCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={classnames(styles.card_container)}>
      <h3>{caption}</h3>
      <p>{children}</p>
      <Button
        onClick={handleClick}
        className={styles.card_button}
        outline
        color="secondary"
      >
        {buttonCaption}
      </Button>
    </div>
  );
};
