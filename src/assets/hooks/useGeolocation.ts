import {useGeolocation} from 'react-use';


const UseGeolocation = () => {

    const state = useGeolocation();

    return JSON.stringify(state, null, 2)
};

export default UseGeolocation;
