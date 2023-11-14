import { FC } from "react";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";

import styles from "./confirmSignup.module.scss";
import { Input } from "src/ui/Input/Input";
import { Logo } from "src/ui/Logo/Logo";
import { ButtonSubmit } from "src/ui/Buttons/ButtonSubmit/ButtonSubmit";
import { ButtonBack } from "src/ui/Buttons/ButtonBack/ButtonBack";

const ConfirmSignup: FC = ({ }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const fio = sessionStorage.getItem("FIO");
  const phone = sessionStorage.getItem("phone");
  const fullName: string[] = fio?.split(" ")!;

   const onSubmit = (data: FieldValues) => {
    axios
      .post(
        `http://xn--90abdibneekjf0abcbbqil3bejr0c1r.xn--p1ai:8000/proprietors?code=${data.cod}`,
        {
          name: fullName[1],
          surname: fullName[0],
          phone_number: "+" + phone,
        }
      )
      .then(({ data }) => localStorage.setItem('token',data));
  };
  return (
    <div>
      <Logo />
      <h2 className="title">Код подтверждения </h2>
      <form
        className={`${styles.form}`}
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <Input
          useForm={register("cod", {
            required: "req",
            maxLength: 4,
          })}
          isErrors={!!errors.cod}
          title="Введите код подтверждения из SMS - сообщения, отправленного на номер +7 (961) ХХХ ХХ 36"
        />
        <div className={`${styles.buttons} container`}>
          <ButtonSubmit isActive type="submit" />
          <ButtonBack />
        </div>
      </form>
    </div>
  );
};

export { ConfirmSignup };
