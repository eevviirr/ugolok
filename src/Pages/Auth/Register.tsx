import { FC } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { axiosBase } from "src/axios";
import { ButtonBack } from "src/ui/Buttons/ButtonBack/ButtonBack";
import { ButtonSubmit } from "src/ui/Buttons/ButtonSubmit/ButtonSubmit";
import { Input } from "src/ui/Input/Input";
import { Logo } from "src/ui/Logo/Logo";

const Register: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data: FieldValues) => {
        try {
            axiosBase
                .get(`/proprietors/verify/phone?phone_number=%2B${data.phone}`)
                .then(() => navigate("confirm"));
            sessionStorage.setItem("phone", data.phone);
            sessionStorage.setItem("FIO", data.FIO);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <Logo />
            <h1 className='title'>Регистрация</h1>
            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                <Input
                    useForm={register("FIO", { required: "Введите ФИО" })}
                    title='Ф.И.О'
                    isError={!!errors.FIO}
                    errorMessage={errors.FIO?.message}
                />
                <Input
                    useForm={register("phone", {
                        required: "Введите номер телефона",
                    })}
                    title='Номер телефона'
                    isError={!!errors.phone}
                    errorMessage={errors.phone?.message}
                />
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 container flex flex-col gap-[10px]'>
                    <ButtonSubmit isActive title='Дальше' type='submit' />
                    <ButtonBack />
                </div>
            </form>
        </div>
    );
};

export { Register };
