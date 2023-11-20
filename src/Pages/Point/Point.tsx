import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetPointsQuery } from "src/store/RTKSlice/api";
import { ButtonBack } from "src/ui/Buttons/ButtonBack/ButtonBack";
import { ButtonLink } from "src/ui/Buttons/ButtonLink/ButtonLink";
import { Input } from "src/ui/Input/Input";
import { Title } from "src/ui/Title/Title";

const Point: FC = ({}) => {
    const token = localStorage.getItem("token");
    const { pointId } = useParams();
    const { data } = useGetPointsQuery(pointId);

    return (
        <div>
            <Title title={token ? "МОЯ ТОЧКА" : "ТОЧКА"} />
            <div className='mt-[8vh]'>
                <address className='text-18px font-medium text-white opacity-70'>
                    {data?.address}
                </address>
                {token && (
                    <Link
                        to={`editAddress`}
                        className='text-white font-bold text-15px'>
                        Изменить адрес
                    </Link>
                )}
                <div className='mt-[4vh] flex flex-col gap-[32px]'>
                    <Input
                        isActive={false}
                        title='ИНН юридического лица'
                        value={"ИНН юридического лиц"}
                    />
                    <Input
                        isActive={false}
                        title='ОГРН юридического лица'
                        value={"ОГРН юридического лица"}
                    />
                </div>
            </div>
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 container flex flex-col gap-[10px] '>
                <ButtonLink isActive title='Изменить' link='add' />
                <ButtonBack />
            </div>
        </div>
    );
};

export { Point };
