const UseTextColor = () => {

    // @ts-ignore
    const theme = document.querySelector("body").classList[0]

    switch (theme){
        case 'dark':
            return {active: '#262626', disabled: '#FFF'}

        default: return {active: '#FFF', disabled: ''}
    }

}

export default UseTextColor;