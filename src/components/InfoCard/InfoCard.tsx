import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.scss';
import classnames from 'classnames';

interface InfoCardProps {
  caption: string;
  buttonCaption: string;
  children: React.ReactNode;
  link: string;
  external?: boolean;
  onClick?: () => void;
}

export default ({
  caption,
  buttonCaption,
  children,
  external: isExternal,
  link,
}: InfoCardProps) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(link);
    window.scrollTo(0, 0);
  };

  const style = classnames('btn btn-secondary btn-outline', styles.card_button);

  const renderButton = () => {
    if (isExternal)
      return (
        <a
          className={style}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonCaption}
        </a>
      );
    return (
      <Button className={style} onClick={handleClick}>
        {buttonCaption}
      </Button>
    );
  };

  return (
    <div className={classnames(styles.card_container)}>
      <h3>{caption}</h3>
      <p>{children}</p>
      {renderButton()}
    </div>
  );
};
