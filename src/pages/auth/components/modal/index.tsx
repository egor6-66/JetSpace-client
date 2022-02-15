import React, {FC, Dispatch, SetStateAction} from 'react';
import LoginForm from './login-form';
import RegisterForm from './register-form';
import ConfirmAccountForm from "./confirm-account-form";
import Logo from '../../../../assets/icon/logo';
import { Modal } from 'antd';
import './auth-modal.less';


interface AuthModal {
    email: string | undefined,
    currentForm: string | null,
    setCurrentForm: Dispatch<SetStateAction<string | null>>
}

const AuthModal: FC<AuthModal> = (props) => {

    const {
        email,
        currentForm,
        setCurrentForm,
    } = props;

    return (
        <Modal
            maskClosable={false}
            visible={!!currentForm}
            centered={true}
            footer={false}
            width={350}
            onCancel={() => setCurrentForm(null)}
        >
            <div className='auth-modal'>
                <div><Logo size={60}/></div>
                {currentForm === 'login' && <LoginForm setCurrentForm={setCurrentForm}/>}
                {currentForm === 'register' && <RegisterForm setCurrentForm={setCurrentForm}/>}
                {currentForm === 'register success' && <ConfirmAccountForm email={email}/>}
            </div>
        </Modal>
    );
};

export default AuthModal;
