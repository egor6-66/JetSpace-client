import React, {FC} from 'react';


interface PlayerIconsProps {
    id: string
}

const PlayerIcons: FC<PlayerIconsProps> = ({id}) => {
    switch (id) {
        case 'play' :
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="#9BA3B1"
                >
                    <path fill="none" d="M0 0h48v48H0z"></path>
                    <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z"></path>
                </svg>
            )
        case 'pause' :
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="#9BA3B1"
                >
                    <path fill="none" d="M0 0h48v48H0z"></path>
                    <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-2 28h-4V16h4v16zm8 0h-4V16h4v16z"></path>
                </svg>
            )
        case 'volume' :
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 16 16"
                    version="1.1"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    xmlSpace="preserve"
                    fill="#9BA3B1"
                >
                    <path d="M10 16L10 0 3 5 0 5 0 11 3 11z"></path>
                    <path
                        d="M11 13.91c2.837-.477 5-2.938 5-5.91s-2.163-5.433-5-5.91v1.011c2.279.465 4 2.484 4 4.899s-1.721 4.434-4 4.899v1.011z"></path>
                    <path
                        d="M11 9.722v1.094c1.163-.413 2-1.512 2-2.816s-.837-2.403-2-2.816v1.094c.595.347 1 .985 1 1.722s-.405 1.375-1 1.722z"></path>
                </svg>
            )

        default:
            return null
    }
};

export default PlayerIcons;