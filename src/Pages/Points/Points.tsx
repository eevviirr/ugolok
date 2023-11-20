import { FC, useEffect, useState } from "react";

import { PointItem } from "src/components/PointItem/PointItem";
import { useAppSelector } from "src/hooks/useAppSelector";
import { useLazyGetPointsQuery } from "src/store/RTKSlice/api";
import { ButtonBack } from "src/ui/Buttons/ButtonBack/ButtonBack";
import { ButtonLink } from "src/ui/Buttons/ButtonLink/ButtonLink";
import { Title } from "src/ui/Title/Title";

interface IPoints {
    title: string;
    address: string;
    id: string;
    owner: string;
}
const Points: FC = ({}) => {
    const pointsId = useAppSelector((state) => state.userSlice.points_id);
    const [points, setPoints] = useState<IPoints[]>([]);

    const [trigger] = useLazyGetPointsQuery();
    useEffect(() => {
        const fetchPoints = pointsId.map(async (id: string) => {
            const { data: point } = await trigger(id);
            return point;
        });
        Promise.all(fetchPoints).then((point) => setPoints(point));
    }, [pointsId]);
    return (
        <div>
            <Title title='МОИ ТОЧКИ' />
            <ul className='mt-[8vh] h-[55vh] overflow-scroll flex flex-col gap-[50px]'>
                {points.map(({ address, id }) => (
                    <li key={id}>
                        <PointItem address={address} pointId={id} />
                    </li>
                ))}
            </ul>
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 container flex flex-col gap-[10px] '>
                <ButtonLink isActive title='Добавить точку' link='add' />
                <ButtonBack />
            </div>
        </div>
    );
};

export { Points };
