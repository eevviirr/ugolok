import { FC } from "react";

import styles from "./Style.module.scss";

interface IInput {
    title?: string;
    useForm?: any;
    isErrors?: boolean;
}
const Input: FC<IInput> = ({
    title = "Название",
    useForm,
    isErrors = false,
}) => (
    <div>
        <span
            className={`${styles.titleInput} ${
                isErrors ? `${styles.titleInputErr}` : ""
            }`}>
            {title}
        </span>
        <input
            type='text'
            name='input'
            className={`input ${isErrors ? "inputError" : ""}`}
            {...useForm}
        />
        {/* {isErrors && <span className={styles.errors}>Ошибка</span>} */}
    </div>
);

export { Input };
