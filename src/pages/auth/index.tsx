import React, {useEffect, useState} from 'react';
import AuthModal from "./components/modal";
import {useTypedSelector} from "../../assets/hooks/useTypedSelector";
import {Button} from "antd";
import './auth.less'

const Auth: React.FC = () => {

    const {user, loading, error} = useTypedSelector(state => state.auth);
    const [currentForm, setCurrentForm] = useState<string | null>(null);

    return (
        <div>
            <Button
                onClick={() => setCurrentForm('login')}
            >
                log
            </Button>
            <Button
                onClick={() => setCurrentForm('register')}
            >
                reg
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
