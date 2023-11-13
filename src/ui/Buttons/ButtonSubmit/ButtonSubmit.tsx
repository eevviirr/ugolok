import { FC } from "react";

interface IButtonSubmit {
    type?: "submit" | "button";
    title?: string;
    isActive?: boolean;
}
const ButtonSubmit: FC<IButtonSubmit> = ({
    type = "button",
    isActive = false,
    title = "Далее",
}) => {
    return (
        <button
            type={type}
            className={`${isActive ? "button" : "buttonTransparent"}`}>
            {title}
        </button>
    );
};

export { ButtonSubmit };
