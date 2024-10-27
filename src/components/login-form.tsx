'use client';

import styles from '@/app/login/login.module.scss';
import { useState } from 'react';

const LoginForm = () => {
  const [passwordType, setPasswordType] = useState('password');

  const togglePasswordType = () => {
    setPasswordType((prev) => {
      if (prev === 'password') {
        {
          return 'text';
        }
      }
      return 'password';
    });
  };

  return (
    <form className={styles.form}>
      <input name='email' type='email' id='email' placeholder='Email' />

      <div className={styles.passwordWrapper}>
        <input
          name='password'
          type={passwordType}
          id='password'
          placeholder='Password'
        />
        <button
          type='button'
          onClick={() => togglePasswordType()}
          className={styles.showPassword}
        >
          SHOW
        </button>
      </div>

      <a href='#' className={styles.forgotPassword}>
        FORGOT PASSWORD?
      </a>
      <button type='submit' className={styles.loginButton}>
        LOG IN
      </button>
    </form>
  );
};
export default LoginForm;
