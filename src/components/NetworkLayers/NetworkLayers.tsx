import React from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import Image from './../Image';

interface NetworkLayersProps {
  className?: string;
}

export default ({ className }: NetworkLayersProps) => {
  return (
    <div className={classnames(className, styles.layers)}>
      <Image
        className={styles.top_layer}
        src="Layers/TopLayer.png"
        alt="Нейросеть"
      />
      <Image
        className={styles.middle_layer}
        src="Layers/MiddleLayer.png"
        alt="Нейросеть"
      />
      <Image
        className={styles.bottom_layer}
        src="Layers/BottomLayer.png"
        alt="Нейросеть"
      />
    </div>
  );
};
