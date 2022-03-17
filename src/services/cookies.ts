import Cookies from 'universal-cookie';


const cookies = new Cookies();
const options:any = {path: `/`, domain: window.location.hostname};

export const saveToken = (token: string) => {
    token && cookies.set('accessToken',token, options)
};

export const getToken = () => {
   return cookies.get('accessToken', options)
};

export const  removeToken = async () => {
    localStorage.removeItem('accessToken')
};
