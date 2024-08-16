import styles from "../styles/Input.module.css";
// export function Input() {
//   return <input placeholder="First name" className={styles.input} />;
// }

export const Input = (props) => {
  const { placeholder } = props;
  return (
    <div>
      <input placeholder={placeholder} className={styles.input} />
    </div>
  );
};
