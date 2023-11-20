import { FC } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { axiosBase } from "src/axios";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { setUser } from "src/store/slice/userSlice";
import { ButtonBack } from "src/ui/Buttons/ButtonBack/ButtonBack";
import { ButtonSubmit } from "src/ui/Buttons/ButtonSubmit/ButtonSubmit";
import { Input } from "src/ui/Input/Input";
import { Logo } from "src/ui/Logo/Logo";

const ConfirmLogin: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const phone = sessionStorage.getItem("phone");
    const dispatch = useAppDispatch();
    const onSubmit = (data: FieldValues) => {
        try {
            axiosBase
                .get(
                    `/proprietors/token?phone_number=%2B${phone}&code=${data.code}`
                )
                .then(({ data }) => {
                    localStorage.setItem("token", data);
                    dispatch(setUser({ isAuth: true }));
                    navigate("/points");
                });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <Logo />
            <h1 className='title'>Код подтверждения </h1>
            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                <Input
                    useForm={register("code", {
                        required: "Введите номер телефона",
                    })}
                    title='Введите код подтверждения из SMS - сообщения, отправленного на номер +7 (961) ХХХ ХХ 36'
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

export { ConfirmLogin };
