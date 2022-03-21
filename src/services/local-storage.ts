export const setItem = (name: string, element: any) => {
    localStorage.setItem(name, JSON.stringify(element))
};

export const getItem = (name: string) => {
   const element: any = localStorage.getItem(name)
   return JSON.parse(element)
};

export const removeItem = (name: string) => {
    localStorage.removeItem(name)
};
