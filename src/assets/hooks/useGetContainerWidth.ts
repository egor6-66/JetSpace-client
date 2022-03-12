import { useWindowSize } from "react-use";


const UseGetContainerWidth = (awayWidthValue: number, maxWidth: number, minWidth: number) => {
    const { width } = useWindowSize();
    if(width >= maxWidth) return maxWidth - awayWidthValue
    if(width <= minWidth) return width - awayWidthValue
    else return width - awayWidthValue
};

export default UseGetContainerWidth;
