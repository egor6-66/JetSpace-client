import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = () => {
    return cookies.get('access_token')
}

export const saveToken = (token: string) => {
    cookies.set('access_token', token)
}

export const removeToken = () => {
    cookies.remove('access_token');
}
