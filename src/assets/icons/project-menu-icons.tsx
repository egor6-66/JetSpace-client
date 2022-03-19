import React, {FC} from 'react';


interface ProjMenuIcons {
    id: string
}

const ProjectMenuIcons: FC<ProjMenuIcons> = ({id}) => {

    switch (id) {
        case 'donations':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    version="1.1"
                    viewBox="0 0 48 48"
                    xmlSpace="preserve"
                    fill="#9BA3B1"
                >
                    <path
                        fillRule="evenodd"
                        d="M47 40a5 5 0 01-5 5H6a5 5 0 01-5-5V11a4 4 0 014-4h20.171l8.099-2.934a.99.99 0 011.268.589L35.391 7H39a4 4 0 014 4v2a4 4 0 014 4v23zM5 9a2 2 0 000 4h3.634c.013-.005.021-.016.034-.021L19.65 9H5zm29.078.181l-1.062-2.924h-.001L30.964 7h.003l-5.514 2h-.01l-11.039 4h21.062l-1.388-3.819zM41 11a2 2 0 00-2-2h-2.883l1.454 4H41v-2zm2 4H5c-.732 0-1.41-.211-2-.555V40a3 3 0 003 3h36a3 3 0 003-3v-7h-4a4 4 0 010-8h4v-8a2 2 0 00-2-2zm2 16v-4h-4a2 2 0 000 4h4zm-4-3h2v2h-2v-2z"
                        clipRule="evenodd"
                    />
                </svg>
            )
        case 'projectInfo':
            return (
                <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 16 16"
                    viewBox="0 0 16 16"
                    fill="#9BA3B1"
                >
                    <g>
                        <path
                            d="M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 11c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                        <path
                            d="M8 6.85c-.28 0-.5.22-.5.5v3.4c0 .28.22.5.5.5s.5-.22.5-.5v-3.4c0-.27-.22-.5-.5-.5zM8.01 4.8c-.26-.02-.5.25-.51.52v.08c0 .27.21.47.49.48H8c.27 0 .49-.24.5-.5v-.11c0-.29-.21-.47-.49-.47z"/>
                    </g>
                </svg>
            )
        case 'signOut':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#212121"
                        d="M8.502 11.5a1.002 1.002 0 110 2.004 1.002 1.002 0 010-2.004z"
                    />
                    <path
                        fill="#212121"
                        d="M12 4.354v6.651l7.442-.001L17.72 9.28a.75.75 0 01-.073-.976l.073-.084a.75.75 0 01.976-.073l.084.073 2.997 2.997a.75.75 0 01.073.976l-.073.084-2.996 3.004a.75.75 0 01-1.134-.975l.072-.085 1.713-1.717-7.431.001L12 19.25a.75.75 0 01-.88.739l-8.5-1.502A.75.75 0 012 17.75V5.75a.75.75 0 01.628-.74l8.5-1.396a.75.75 0 01.872.74zm-1.5.883l-7 1.15V17.12l7 1.236V5.237z"
                    />
                    <path
                        fill="#212121"
                        d="M13 18.501h.765l.102-.006a.75.75 0 00.648-.745l-.007-4.25H13v5.001zM13.002 10L13 8.725V5h.745a.75.75 0 01.743.647l.007.102.007 4.251h-1.5z"
                    />
                </svg>
            )
        default:
            return null
    }
};

export default ProjectMenuIcons;