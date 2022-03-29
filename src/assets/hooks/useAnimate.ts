const UseAnimate = (type: string) => {

    switch (type) {

        case 'arrayIteration':
            const arrayIteration = {
                visible: (index: number) => ({opacity: 1, transition: {duration: 1, delay: index * 0.3}}),
                hidden: {opacity: 0},
            }
            return arrayIteration

        case 'smoothOpen':
            const smoothOpen = {
                hidden: {height: 0, opacity: 0},
                visible: {height: 'auto', opacity: 1, transition: {duration: 0.5}},
                exit: {height: 0, opacity: 0, transition: {duration: 0.5},}
            }
            return smoothOpen

        case 'rotateY':
            const rotateY = {
                hidden:{rotateY: 0},
                visible: {transition: {duration: 3}},
                click: {rotateY: 180}
            }
            return rotateY

        default: return {}
    }
}


export default UseAnimate;
