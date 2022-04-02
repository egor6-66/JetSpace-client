

const UseAnimate = (type: string) => {

    switch (type) {

        case 'arrayIteration':
            const arrayIteration = {
                visible: (index: number) => ({opacity: 1, transition: {duration: 1, delay: index * 0.3}}),
                hidden: {opacity: 0},
            }
            return arrayIteration;

        case 'smoothOpen':
            const smoothOpen = {
                hidden: {height: 0, opacity: 0},
                visible: {height: 'auto', opacity: 1, transition: {duration: 0.5}},
                exit: {height: 0, opacity: 0, transition: {duration: 0.5},}
            }
            return smoothOpen;

        case 'rotateY':
            const rotateY = {
                hidden: {rotateY: 0},
                visible: {transition: {duration: 3}},
                click: {rotateY: 180}
            }
            return rotateY;

        case 'typing-text':
            const getDelay = (index: number) =>{
                if(index < 3) return index * 0.1
                if(index < 9) return index * 0.12
                if(index < 17) return index * 0.15
                if(index < 100) return index * 0.20
            }
            const typingText = {
                hidden: {display: 'none'},
                visible: (index: number) => ({display: 'block', transition: {duration: 0, delay: getDelay(index)}}),
            }
            return typingText

        case 'hidden-visible':
            const hiddenVisible = {
                hidden: {opacity: 1},
                visible:{opacity: 0, transition: {duration: 1, loop: Infinity}}}
            return hiddenVisible

        default:
            return {}
    }
}


export default UseAnimate;
