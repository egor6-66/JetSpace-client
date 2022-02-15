import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const saveToken = (token) => {
    cookies.set('access_token', token)
}

export const removeToken = () => {
    cookies.remove('access_token');
}
