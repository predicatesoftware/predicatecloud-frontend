import React from 'react';

const IMG_URL = `${window.location.origin}/images/`;

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export default (props: ImageProps) => {
  const { src, alt, className } = props;

  return (
    <img
      className={className}
      src={IMG_URL + src}
      alt={alt}
      onClick={props.onClick}
    />
  );
};
