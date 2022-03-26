const UseAnimate = (type: string, index?: number) => {

    const arrayIteration = {
        visible: (index: number) => ({
            opacity: 1,
            transition: {
                duration: 1,
                delay: index * 0.3,
            },
        }),
        hidden: {opacity: 0},
    }

    const smoothOpen = {
        hidden: {
            height: 0,
            opacity: 0
        },
        visible: {
            height: 'auto',
            opacity: 1,
            transition: {
                duration: 0.5
            },
        },
        exit: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.5
            },
        }
    }
    if(type === 'arrayIteration') return arrayIteration
    if(type === 'smoothOpen') return smoothOpen
};

export default UseAnimate;
