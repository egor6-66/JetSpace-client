import {useSize} from 'react-use';

const UseGetElementWidth = (element: any) => {
    const [sized, {width, height}] = useSize(
        ({width}) => element, {width: 100, height: 100});
    console.log(sized)
};

export default UseGetElementWidth;
