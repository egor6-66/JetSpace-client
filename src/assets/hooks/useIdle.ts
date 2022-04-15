import {useIdle} from "react-use";

const UseIdle = (time: number) => {

    return !useIdle(time);
};

export default UseIdle;