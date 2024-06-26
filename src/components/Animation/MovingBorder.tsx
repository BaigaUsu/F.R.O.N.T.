import React, { ReactNode } from 'react';
import styles from './MovingBorder.module.scss'; // Ensure the CSS file is correctly imported

interface GradientBorderProps {
  children: ReactNode; // Define children prop as ReactNode
}

const MovingBorder: React.FC<GradientBorderProps> = ({ children }) => {
  return (
    <div className={styles.block}>
      <div className={`${styles.corner} ${styles.tl}`}></div>
      <div className={`${styles.corner} ${styles.tr}`}></div>
      <div className={`${styles.corner} ${styles.bl}`}></div>
      <div className={`${styles.corner} ${styles.br}`}></div>
      {children}
    </div>
  );
}

export default MovingBorder;
