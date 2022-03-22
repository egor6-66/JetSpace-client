import React, { useState } from 'react';
import { useTypedSelector } from "../../store";
import AuthModal from "./components/modal";
import { Button } from "antd";
import './auth.less'


const Auth: React.FC = () => {

    const user = useTypedSelector(state => state.user);
    const [currentForm, setCurrentForm] = useState<string | null>(null);

    return (
        <div className='auth'>
            <Button
                onClick={() => setCurrentForm('login')}
            >
                логин
            </Button>
            <Button
                onClick={() => setCurrentForm('register')}
            >
                регистрация
            </Button>
            <AuthModal
                email={user!.email}
                currentForm={currentForm}
                setCurrentForm={setCurrentForm}
            />
        </div>
    );
};

export default Auth;
