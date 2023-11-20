import { FC } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAddPointMutation } from "src/store/RTKSlice/api";
import { ButtonBack } from "src/ui/Buttons/ButtonBack/ButtonBack";
import { ButtonSubmit } from "src/ui/Buttons/ButtonSubmit/ButtonSubmit";
import { Input } from "src/ui/Input/Input";
import { Title } from "src/ui/Title/Title";

const AddPoint: FC = ({}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const token = localStorage.getItem("token");
    const [addPoint] = useAddPointMutation();
    const navigate = useNavigate();
    const onSubmit = (data: FieldValues) => {
        addPoint({
            token,
            body: { title: data.name, address: data.address },
        }).then(() => {
            navigate(-1);
        });
    };
    return (
        <div>
            <Title title='НОВАЯ ТОЧКА' />
            <form
                className='mt-[8vh]'
                onSubmit={handleSubmit((data) => onSubmit(data))}>
                <div className='h-[50vh] overflow-scroll flex flex-col gap-[32px]'>
                    <Input
                        useForm={register("inn", {
                            required: "обязательно для заполнения",
                        })}
                        isActive={false}
                        title='ИНН юридического лица'
                        isError={!!errors?.inn}
                        errorMessage={errors.inn?.message}
                    />
                    <Input
                        useForm={register("ogrn", {
                            required: "обязательно для заполнения",
                        })}
                        isActive={false}
                        title='ОГРН юридического лица'
                        isError={!!errors?.ogrn}
                        errorMessage={errors.orgn?.message}
                    />
                    <Input
                        useForm={register("address", {
                            required: "обязательно для заполнения",
                        })}
                        isActive={false}
                        title='Адрес препдприятия '
                        isError={!!errors?.address}
                        errorMessage={errors.address?.message}
                    />
                    <Input
                        useForm={register("name", {
                            required: "обязательно для заполнения",
                        })}
                        isActive={false}
                        title='Название предприятия'
                        isError={!!errors?.name}
                        errorMessage={errors.name?.message}
                    />
                </div>

                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 container flex flex-col gap-[10px] '>
                    <ButtonSubmit
                        isActive
                        title='Добавить точку'
                        type='submit'
                    />
                    <ButtonBack />
                </div>
            </form>
        </div>
    );
};

export { AddPoint };
