import React from 'react';
import styles from './animated_button.module.css';

const Button = () => {
  return (
    <button className={`${styles.btn12} btn-12`}>
      <span>Click</span>
      <span>Read More</span>
    </button>
  );
};

export default Button;