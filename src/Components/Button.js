import styles from "../styles/Button.module.css";
// export default function Button(props) {
//   return <button className={styles.button}>{props.text}</button>;
// }
export const Button = (props) => {
  const { text } = props;
  return <button className={styles.button}>{text}</button>;
};
