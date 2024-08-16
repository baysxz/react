import styles from "../styles/LoginSection.module.css";
import { Input } from "./Input";
import { Button } from "./Button";

export const LoginSection = () => {
  return (
    <div className={styles.loginSection}>
      <Input placeholder='First name' />
      <Input placeholder='Last name' />
      <Input placeholder='Email' />
      <Button text='Subscribe' />
    </div>
  );
};
