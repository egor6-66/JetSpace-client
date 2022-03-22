import React, {FC} from 'react';


interface ConfirmAccountFormProps {
    email: string | undefined,
}

const ConfirmAccountForm: FC<ConfirmAccountFormProps> = (props) => {

    const getRef = () => {
        if (props.email) {
            const mail = props.email?.split('@')[1].split('.')[0]
            if (mail === 'gmail') return 'https://mail.google.com/'
            if (mail === 'yandex') return 'https://mail.yandex.com/'
            if (mail === 'mail') return ' https://mail.ru/'
        }
    }

    return (
        <>
            <div style={{fontSize: '18px', textAlign: 'center'}}>
                На вашу электронную почту было отправлено
                письмо с сылкой активации, перейдите
                по ней для подтверждения аккаунта
            </div>
            <a style={{marginTop: '15px', fontSize: '20px', color: "blue", cursor: "pointer"}}
               href={getRef()}>{getRef() && 'Перейти к почте'}</a>
        </>
    );
};

export default ConfirmAccountForm;
