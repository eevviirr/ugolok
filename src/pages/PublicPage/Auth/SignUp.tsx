import { FC } from "react";
import { AuthForm } from "src/Components/AuthFrom/AuthForm";
import { Logo } from "src/ui/Logo/Logo";

const SignUp: FC = ({}) => {
    return (
        <div>
            <Logo />
            <h1 className='title'> Регистрация</h1>

            <AuthForm />
        </div>
    );
};

export { SignUp };
