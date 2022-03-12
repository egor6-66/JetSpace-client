import { useWindowSize } from "react-use";


const UseGetContainerHeight = (awayHeightValue: number, maxHeight: number, minHeight: number) => {
    const { height } = useWindowSize();
    if(height >= maxHeight) return maxHeight - awayHeightValue
    if(height <= minHeight) return height - awayHeightValue
    else return height - awayHeightValue
};

export default UseGetContainerHeight;
