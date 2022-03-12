export const svgVariant1 = {
    hidden: {rotate: -180},
    visible: {
        rotate: 0,
        transition:{
            duration: 3,
        }
    }
}

export const pathVariant1 = {
    hidden: {
        opacity:0,
        pathLength:0,
    },
    visible: {
        opacity:1,
        pathLength:1,
        transition: {
            duration: 8,
            ease: 'easeInOut'
        }
    }
}
