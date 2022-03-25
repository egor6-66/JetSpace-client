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
        case 'editVoiceAssist' :
            return (
                <>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 52 52"
                        xmlSpace="preserve"
                        width="24" height="24"
                        style={{cursor: "pointer", borderRadius: '50%', position: "relative"}}

                    >
                        <path fill="#9BA3B1"
                              d="M50 38.71c0-.066-.009-.13-.011-.195.002-.058.01-.116.01-.175V25.883C50 14.367 40.53 4.998 28.89 4.998h-5.78C11.47 4.998 2 14.367 2 25.883v14.593h.315c.887 2.42 3.549 4.184 6.686 4.184h1V32.77H9c-1.96 0-3.73.687-5.002 1.79v-8.677C4 15.47 12.573 6.998 23.11 6.998h5.781C39.427 6.998 48 15.469 48 25.883v8.675c-1.272-1.102-3.042-1.788-5-1.788h-1v10.883c-2.818.931-6.813 1.592-12.27 1.236.17-.373.27-.784.27-1.22 0-1.65-1.35-2.98-3-2.98-1.66 0-3 1.33-3 2.98 0 1.601 1.28 2.907 2.884 2.97v.005a50.55 50.55 0 005.854.358c6.437 0 10.717-1.438 13.48-3.014C48.462 42.996 50 41.004 50 38.71z"></path>

                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 48 48"
                        style={{cursor: "pointer", borderRadius: '50%', position: "absolute", zIndex: 4, marginLeft:7}}
                    >
                        <g>
                            <path
                                fill="#9BA3B1"
                                d="M26 48h-4c-1.654 0-3-1.346-3-3v-3.724a17.852 17.852 0 01-3.681-1.527l-2.634 2.635c-1.134 1.134-3.109 1.132-4.243 0l-2.829-2.828c-.567-.566-.879-1.32-.879-2.121s.312-1.555.879-2.121l2.635-2.636a17.738 17.738 0 01-1.525-3.679H3c-1.654 0-3-1.346-3-3v-4c0-.802.312-1.555.878-2.121A2.984 2.984 0 013 18.999h3.724c.37-1.278.88-2.511 1.526-3.679l-2.634-2.635a3.002 3.002 0 010-4.242l2.828-2.829c1.133-1.132 3.109-1.134 4.243 0l2.635 2.635A17.843 17.843 0 0119 6.724V3c0-1.654 1.346-3 3-3h4c1.654 0 3 1.346 3 3v3.724c1.28.37 2.512.881 3.678 1.525l2.635-2.635c1.134-1.132 3.109-1.134 4.243 0l2.829 2.828c.567.566.879 1.32.879 2.121s-.312 1.555-.879 2.121l-2.634 2.635a17.763 17.763 0 011.526 3.68H45c1.654 0 3 1.346 3 3v4c0 .802-.312 1.555-.878 2.121s-1.32.879-2.122.879h-3.724a17.85 17.85 0 01-1.526 3.68l2.634 2.635a3.002 3.002 0 010 4.242l-2.828 2.829c-1.134 1.133-3.109 1.133-4.243 0L32.68 39.75a17.855 17.855 0 01-3.679 1.526V45A3.005 3.005 0 0126 48zM15.157 37.498c.179 0 .36.048.521.146a15.877 15.877 0 004.557 1.891 1 1 0 01.765.972V45c0 .552.449 1 1 1h4c.551 0 1-.448 1-1v-4.493a1 1 0 01.765-.972 15.876 15.876 0 004.556-1.89c.396-.241.902-.18 1.229.146l3.178 3.179c.375.374 1.039.376 1.415 0l2.828-2.829a1 1 0 000-1.414l-3.179-3.179a1 1 0 01-.146-1.229 15.86 15.86 0 001.889-4.556 1 1 0 01.972-.766H45a.996.996 0 001-.998v-4c0-.552-.449-1-1-1h-4.493a.999.999 0 01-.972-.766 15.85 15.85 0 00-1.889-4.556 1 1 0 01.146-1.229l3.179-3.179c.186-.187.293-.444.293-.707s-.107-.521-.293-.707l-2.829-2.828a1.027 1.027 0 00-1.415 0l-3.179 3.179a.995.995 0 01-1.229.146 15.864 15.864 0 00-4.554-1.889.997.997 0 01-.765-.97V3c0-.552-.449-1-1-1h-4c-.551 0-1 .448-1 1v4.493a1 1 0 01-.765.972 15.873 15.873 0 00-4.556 1.889.998.998 0 01-1.228-.146l-3.179-3.179a1.027 1.027 0 00-1.415 0L7.03 9.857a1 1 0 000 1.414l3.179 3.179a1 1 0 01.146 1.229 15.856 15.856 0 00-1.889 4.555 1 1 0 01-.972.766H3a.996.996 0 00-1 .999v4c0 .552.449 1 1 1h4.493c.462 0 .864.316.972.766a15.866 15.866 0 001.889 4.555 1 1 0 01-.146 1.229l-3.179 3.18c-.186.187-.293.444-.293.707s.107.521.293.707l2.829 2.828a1.027 1.027 0 001.415 0l3.178-3.179a.99.99 0 01.706-.294z"></path>
                            <path
                                fill="#9BA3B1"
                                d="M24 34c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.485 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.588-8-8-8z"></path>
                        </g>
                    </svg>
                </>
            )
        default:
            return null
    }
};

export default ProjectMenuIcons;