export const getToken = () => {
   return  localStorage.getItem('access_token')
}

export const saveToken = (token: string) => {
    localStorage.setItem('access_token',token)
}

export const  removeToken = async () => {
    localStorage.removeItem('access_token')
}