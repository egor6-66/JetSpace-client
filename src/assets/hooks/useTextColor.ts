const UseTextColor = () => {

    // @ts-ignore
    const theme = document.querySelector("body").classList[0]

    switch (theme){
        case 'dark':
            return {active: '#eb2f96', disabled: '#9e1068'}

        default: return {active: '#6666', disabled: '#000'}
    }

}

export default UseTextColor;