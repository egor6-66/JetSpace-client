import {UseTextColor} from '../../../../assets/hooks'

const color = UseTextColor()


export const animationVariant1 = {
    hidden: {

    },
    visible: {
        transition:{
            duration: 3,
            times: [0, 0.2, 1]
        }
    },
    click: {
        scale: 0,
        // rotate: 90,
        transition: {
        }
    }
}