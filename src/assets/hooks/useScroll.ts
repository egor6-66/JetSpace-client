import {useScroll} from 'react-use';


const UseScroll = (name: string, ref: any) => {

    const {x, y} = useScroll(ref);

    return {
        name,
        position: {
            x,
            y
        }
    };
};

export default UseScroll;
