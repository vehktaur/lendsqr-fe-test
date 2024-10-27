import assets from '@/assets/assets';
import styles from './login.module.scss';
import Image from 'next/image';
import LoginForm from '@/components/login-form';

const Login: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
      {/* Left side - Logo and Illustration */}

      <header className={styles.header}>
        <Image src={assets.logo} alt='Lendsqr logo' className={styles.logo} />
      </header>

      <div className={styles.loginContainerWrapper}>
        <div className={styles.leftSection}>
          <Image
            src={assets.loginBg}
            alt='Illustration'
            className={styles.illustration}
          />
        </div>

        {/* Right side - Login Form */}
        <div className={styles.rightSection}>
          <div className={styles.rightSectionWrapper}>
            <h2 className={styles.welcome}>Welcome!</h2>
            <p className={styles.subheading}>Enter details to login.</p>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
