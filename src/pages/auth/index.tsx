import React, { useState } from 'react';
import { useTypedSelector } from "../../store";
import AuthModal from "./components/modal";
import { Button } from "antd";
import {motion} from "framer-motion";
import './auth.less'


const Auth: React.FC = () => {

    const user = useTypedSelector(state => state.user);
    const [currentForm, setCurrentForm] = useState<string | null>(null);

    return (
        <motion.div className='auth'
                    initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}}
        >
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
        </motion.div>
    );
};

export default Auth;
