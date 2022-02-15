import wordDeclension from "../functions/word-declension";

interface FormRules {
    required: boolean,
    message: string,
    validator: {
        type: string,
        length: number,
    },
    name: string
}

export const validateMessages = {
    types: {
        email: 'Не правельный формат Email',
    },
};

export const formRules = ({required, message, validator, name}: FormRules) => {

    const word = () => {
        return wordDeclension({
            length: validator.length,
            word: 'символ',
            suffix: ['a', 'ов'],
        })
    };

    return [
        {required: required, message: message},
        ({getFieldValue}: any) => ({
            validator(_: any, value: any) {
                switch (validator.type) {
                    case 'length':
                        if (getFieldValue(name)?.length > validator.length) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error(`Введите минимум ${validator.length} ${word()}!`));

                    case 'confirm':
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('Пароли не совпадают!'));
                }
            },
        })
    ]
};
