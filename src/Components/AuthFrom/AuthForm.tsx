import { FC } from "react";
import { useForm } from "react-hook-form";

import styles from "./styles.module.scss";
import { ButtonBack } from "src/ui/Buttons/ButtonBack/ButtonBack";
import { ButtonSubmit } from "src/ui/Buttons/ButtonSubmit/ButtonSubmit";
import { Input } from "src/ui/Input/Input";
import { axiosBase } from "src/axios/Axios";
import { useNavigate } from "react-router-dom";

const AuthForm: FC = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const onSubmit = (data: any) => {
    sessionStorage.setItem("FIO", data.FIO);
    sessionStorage.setItem("phone", data.phone);
    axiosBase.get(
      `http://xn--90abdibneekjf0abcbbqil3bejr0c1r.xn--p1ai:8000/proprietors/verify/phone?phone_number=%2B${data.phone}`
    ).then(() => navigate('confirm'));
  };
  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className={styles.form}
    >
      <Input
        title="Ф.И.О"
        useForm={register("FIO", { required: "required" })}
        isErrors={!!errors.FIO}
      />
      <Input
        title="Номер телефона"
        useForm={register("phone", {
          required: "required",
          pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        })}
        isErrors={!!errors.phone}
      />
      <div className={`${styles.buttons} container`}>
        <ButtonSubmit isActive type="submit" />
        <ButtonBack />
      </div>
    </form>
  );
};

export { AuthForm };
