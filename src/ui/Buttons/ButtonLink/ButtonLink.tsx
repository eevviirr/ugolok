import { FC } from "react";
import { Link } from "react-router-dom";

interface IButtonLink {
    link?: string;
    title?: string;
    isActive?: boolean;
}
const ButtonLink: FC<IButtonLink> = ({
    link = "",
    title = "Далее",
    isActive,
}) => {
    return (
        <Link to={link} className={`${isActive ? "button" : "buttonTransparent"}`}>
            {title}
        </Link>
    );
};

export { ButtonLink };
