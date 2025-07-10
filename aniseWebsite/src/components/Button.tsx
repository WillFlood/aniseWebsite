import React from 'react';
import styles from '../styles/Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ primary = false, children, ...props }) => (
  <button
    className={primary ? styles.primary : styles.secondary}
    {...props}
  >
    {children}
  </button>
);

export default Button; 