import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IButtonBack {
    title?: string;
}
const ButtonBack: FC<IButtonBack> = ({ title = "Назад" }) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1)} className='buttonTransparent'>
            {title}
        </button>
    );
};

export { ButtonBack };
