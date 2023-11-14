import { FC } from "react";

import styles from "./Style.module.scss";

interface IInput {
  title?: string;
  useForm?: any;
  isErrors?: boolean;
  handleChange?: (e: any) => void;
  isActive?: boolean;
}
const Input: FC<IInput> = ({
  title = "Название",
  useForm,
  handleChange,
  isErrors = false,
  isActive = true,
}) => (
  <div>
    <span
      className={`${styles.titleInput} ${
        isErrors ? `${styles.titleInputErr}` : ""
      }`}
    >
      {title}
    </span>
    <input
      type="text"
      name="input"
      className={` ${isErrors ? "inputError" : ""} ${
        isActive ? "input" : `inputpas`
      }`}
      {...useForm}
      onChange={handleChange}
    />
    {/* {isErrors && <span className={styles.errors}>Ошибка</span>} */}
  </div>
);

export { Input };
