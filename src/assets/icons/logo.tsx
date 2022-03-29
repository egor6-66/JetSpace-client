import React, {FC} from 'react';
import {UseColor} from "../hooks";
import {motion} from "framer-motion";


interface LogoIcon {
    size: number,
    isActiveAnim: boolean
}

const LogoProjectIcon: FC<LogoIcon> = ({size, isActiveAnim}) => {

    const colors = UseColor()

    const svgAnim = {
        hidden: {
            rotate: 0,
            opacity: 0
        },
        visible: {
            rotate: 360,
            opacity: 1,
        }
    };

    const pathVariants: any = []

    for (let i = 0; i < 10; i++) {
        pathVariants.push({
            hidden: {
                stroke:"#000",
                pathLength: 0,
            },
            visible: {
                opacity: 1,
                stroke: 'url(#stroke)',
                pathLength: 1,
                fill: 'url(#rocket)',
                transition: {
                    duration: i / 10 + 1,
                    ease: 'easeInOut',
                    yoyo: Infinity
                }
            }
        })
    }

    const isActive = (value: number) => {
        return isActiveAnim ? pathVariants[value] : {}
    }

    return (
        <>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                fill="none"
                viewBox="0 0 33 28"
                variants={svgAnim}
                initial='hidden'
                animate='visible'
            >
                <defs>
                    <linearGradient id="rocket" x1="0%" x2="100%" y1="50%" y2="50%">
                        <stop offset="0%" stopOpacity="1"></stop>
                        <stop offset="100%" stopColor="#DC00FF" stopOpacity="1"></stop>
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient id="fire" x1="0%" x2="100%" y1="50%" y2="50%">
                        <stop offset="0%" stopColor="#E11010" stopOpacity="1"></stop>
                        <stop offset="100%" stopColor="#DC00FF" stopOpacity="1"></stop>
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient id="stroke" x1="0%" x2="100%" y1="50%" y2="50%">
                        <stop offset="52%" stopOpacity="1"></stop>
                        <stop offset="100%" stopColor="#FF00DA" stopOpacity="1"></stop>
                    </linearGradient>
                </defs>
                <g filter="url(#filter0_d_4_35)">
                    <motion.path
                        fill="#FFF"
                        d="M14.047 16.803a.912.912 0 01-.239.145.68.68 0 01-.213.05.587.587 0 01-.335-.093.718.718 0 01-.2-.183.207.207 0 01-.049-.127c0-.047.038-.101.115-.164a.661.661 0 01.092-.06.24.24 0 01.108-.033c.035-.002.066.013.093.046a.586.586 0 00.19.166c.061.029.127.014.199-.043.037-.03.06-.061.067-.092a.18.18 0 00.003-.087.23.23 0 00-.042-.09l-.674-.836-.3.24a.948.948 0 01-.133.091.25.25 0 01-.132.032c-.043-.003-.083-.028-.12-.074-.04-.048-.056-.093-.05-.136a.236.236 0 01.057-.123.858.858 0 01.118-.113l.465-.375c.055-.045.105-.066.152-.064a.22.22 0 01.13.05.76.76 0 01.121.122l.699.866a.67.67 0 01.127.229.545.545 0 01.023.205.491.491 0 01-.048.172.71.71 0 01-.085.137 1.153 1.153 0 01-.14.142zm1.152-2.133l.057.071c.03.037.047.079.052.123.005.044-.028.094-.098.151l-.454.366.088.11a.287.287 0 00.126.09c.05.018.1.006.151-.035.04-.033.065-.063.072-.09a.237.237 0 00.005-.09.186.186 0 01.003-.06.197.197 0 01.031-.068.38.38 0 01.084-.086.275.275 0 01.124-.06c.041-.009.08.01.116.054.04.05.058.104.053.162a.44.44 0 01-.054.174.826.826 0 01-.12.166 1.312 1.312 0 01-.144.137.94.94 0 01-.199.121.542.542 0 01-.21.048.451.451 0 01-.21-.046.586.586 0 01-.199-.167l-.215-.267a.729.729 0 01-.122-.205.543.543 0 01-.035-.179c0-.055.01-.106.03-.153a.611.611 0 01.155-.222c.03-.028.057-.051.08-.07.077-.061.148-.107.214-.138a.64.64 0 01.179-.056.38.38 0 01.268.057.509.509 0 01.095.077c.03.03.055.058.077.085zm-.646.46l.065.08.285-.23a1.01 1.01 0 00-.107-.116.141.141 0 00-.1-.044c-.034 0-.075.019-.124.058-.055.045-.08.09-.073.134a.252.252 0 00.054.118zm.633-1.142l.064-.052-.161-.2a.84.84 0 01-.091-.136.225.225 0 01-.025-.134c.006-.044.034-.086.083-.126.05-.04.096-.057.14-.053a.222.222 0 01.123.054c.038.032.077.07.114.117l.162.2.093-.075a.343.343 0 01.136-.072c.044-.01.09.016.139.077.046.058.06.107.043.15a.317.317 0 01-.097.12l-.094.074.322.4c.03.036.062.065.097.087.036.021.077.013.123-.024.056-.045.104-.067.143-.066.04 0 .084.03.13.087.05.06.059.126.03.197a.473.473 0 01-.146.186.626.626 0 01-.152.094.305.305 0 01-.256.002.47.47 0 01-.112-.071 1.015 1.015 0 01-.11-.106 4.8 4.8 0 01-.11-.132l-.303-.376-.064.051a.313.313 0 01-.136.07c-.044.007-.09-.018-.136-.076-.05-.06-.065-.11-.046-.15a.34.34 0 01.098-.117zm1.172-1.035a.204.204 0 00.097.065c.039.01.082.015.13.014a1.3 1.3 0 00.156-.015l.167-.024c.058-.007.117-.012.177-.013a.77.77 0 01.178.015.559.559 0 01.322.192l.008.01c.049.06.085.12.108.18a.476.476 0 01.015.322.623.623 0 01-.154.255 1.15 1.15 0 01-.099.095l-.01.01a.875.875 0 01-.186.117.61.61 0 01-.167.05.485.485 0 01-.375-.113.541.541 0 01-.077-.077c-.042-.051-.057-.103-.047-.153a.228.228 0 01.084-.132.256.256 0 01.152-.057.172.172 0 01.15.066c.047.056.091.085.133.087.04 0 .084-.018.13-.054a.232.232 0 00.084-.13c.01-.047-.01-.1-.06-.161a.284.284 0 00-.159-.102.672.672 0 00-.205-.017c-.075.004-.15.01-.227.02a2.45 2.45 0 01-.237.014.656.656 0 01-.22-.036.421.421 0 01-.181-.13l-.015-.018a.76.76 0 01-.132-.23.382.382 0 01-.01-.204.463.463 0 01.095-.187c.049-.062.111-.123.188-.185l.03-.024a.792.792 0 01.196-.12.518.518 0 01.168-.04.38.38 0 01.142.017.47.47 0 01.194.122c.022.024.04.043.052.058.036.045.05.094.04.149a.224.224 0 01-.085.136.214.214 0 01-.134.044c-.054 0-.094-.014-.118-.044-.05-.063-.097-.097-.14-.103-.041-.006-.083.008-.127.043a.276.276 0 00-.095.122c-.014.04.008.096.064.166zm1.975.704l-.87-1.079a.96.96 0 01-.094-.137.212.212 0 01-.03-.13c.006-.044.035-.086.088-.129.049-.04.094-.06.135-.06.04-.001.077.01.11.033.032.021.06.047.084.077a.4.4 0 01-.025-.2.291.291 0 01.117-.19.514.514 0 01.143-.08.378.378 0 01.168-.023c.059.005.12.025.182.06a.63.63 0 01.184.164l.267.33a.649.649 0 01.122.218c.02.068.027.13.018.188a.378.378 0 01-.057.16.516.516 0 01-.11.121.295.295 0 01-.21.076.399.399 0 01-.19-.069l.315.39c.038.048.069.095.092.14.024.046.033.091.027.135-.006.044-.035.086-.086.127-.049.04-.095.058-.139.054a.23.23 0 01-.125-.055.886.886 0 01-.116-.121zm.087-1.105l-.222-.276a.485.485 0 00-.11-.104c-.038-.025-.08-.019-.125.018-.056.045-.073.104-.05.175a.563.563 0 00.062.124c.03.046.069.098.114.156.03.037.066.073.108.108a.351.351 0 00.13.07.134.134 0 00.123-.029c.046-.036.061-.075.045-.117a.466.466 0 00-.075-.125zm1.146-1.665l.502.623c.038.047.07.093.094.138a.213.213 0 01.029.131c-.005.042-.034.084-.087.126a.236.236 0 01-.134.062.19.19 0 01-.11-.032.423.423 0 01-.086-.08.4.4 0 01.026.2.288.288 0 01-.118.19.516.516 0 01-.142.081.38.38 0 01-.168.023.467.467 0 01-.182-.058.666.666 0 01-.184-.166l-.267-.33a.658.658 0 01-.123-.216.462.462 0 01-.019-.192.386.386 0 01.06-.158.512.512 0 01.108-.122.291.291 0 01.21-.075c.07.006.134.029.19.068-.056-.07-.079-.133-.068-.19a.236.236 0 01.088-.145c.05-.04.096-.058.14-.054a.222.222 0 01.123.056c.04.033.08.073.118.12zm-.455.65l.222.275a.493.493 0 00.11.104c.037.024.079.018.125-.018.056-.046.073-.104.05-.176a.496.496 0 00-.062-.121 2.132 2.132 0 00-.114-.159.742.742 0 00-.106-.105.35.35 0 00-.13-.07.133.133 0 00-.126.026c-.045.037-.06.076-.044.117.015.042.04.084.075.126zm1.127-.974l.285.354a.42.42 0 00.068.066c.028.02.058.032.09.036.032.005.065-.007.1-.035.061-.05.09-.093.085-.131a.25.25 0 00-.062-.129.117.117 0 01-.021-.11c.011-.042.053-.093.126-.151.069-.056.122-.08.161-.072.039.008.07.027.095.057.04.05.067.098.081.146a.378.378 0 01.018.145.461.461 0 01-.032.137.674.674 0 01-.07.127.942.942 0 01-.198.21.82.82 0 01-.194.116.546.546 0 01-.21.045.483.483 0 01-.211-.046.558.558 0 01-.197-.161l-.215-.267a.731.731 0 01-.121-.205.545.545 0 01-.035-.179c0-.055.01-.106.029-.153a.707.707 0 01.156-.222c.03-.028.056-.05.079-.07.068-.054.132-.096.192-.126a.695.695 0 01.167-.059.44.44 0 01.143-.008.445.445 0 01.285.162c.03.037.047.078.052.123.005.044-.027.094-.098.15a.886.886 0 01-.088.062.226.226 0 01-.1.032c-.034.002-.064-.013-.09-.046a.245.245 0 00-.107-.083c-.036-.014-.085.004-.146.054-.051.04-.074.082-.068.122.007.04.024.076.051.11zm1.788-1.395l.057.07c.03.038.047.079.052.124.005.043-.028.094-.099.15l-.453.367.088.109a.287.287 0 00.126.09c.05.018.1.006.151-.035.04-.033.065-.063.072-.09a.237.237 0 00.005-.09.186.186 0 01.003-.06.197.197 0 01.032-.068.379.379 0 01.083-.086.275.275 0 01.124-.06c.041-.009.08.01.116.055.04.05.058.103.053.162a.44.44 0 01-.054.173.827.827 0 01-.12.166 1.312 1.312 0 01-.143.137.94.94 0 01-.2.121.542.542 0 01-.21.049.451.451 0 01-.21-.047.586.586 0 01-.199-.167l-.215-.267a.728.728 0 01-.122-.205.542.542 0 01-.035-.179c0-.055.01-.106.03-.153a.61.61 0 01.155-.222c.03-.028.057-.05.08-.07.077-.061.148-.107.214-.138a.642.642 0 01.179-.055.38.38 0 01.268.056.51.51 0 01.095.077c.03.03.055.058.077.086zm-.646.46l.065.08.285-.23a1.016 1.016 0 00-.107-.117.141.141 0 00-.1-.044c-.034 0-.075.02-.124.058-.055.045-.08.09-.073.134a.252.252 0 00.054.119z"
                    ></motion.path>
                </g>
                <mask id="path-3-inside-1_4_35" fill={'url(#rocket)'}>
                    <motion.path
                        fillRule="evenodd"
                        d="M31.073 14c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13zm1 0c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14zm-2.2 0c0 6.517-5.283 11.8-11.8 11.8s-11.8-5.283-11.8-11.8 5.284-11.8 11.8-11.8c6.517 0 11.8 5.283 11.8 11.8zm.2 0c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12s5.373-12 12-12c6.628 0 12 5.373 12 12z"
                        clipRule="evenodd"
                    ></motion.path>
                </mask>
                <motion.path
                    fill={'url(#rocket)'}
                    fillRule="evenodd"
                    d="M31.073 14c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13zm1 0c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14zm-2.2 0c0 6.517-5.283 11.8-11.8 11.8s-11.8-5.283-11.8-11.8 5.284-11.8 11.8-11.8c6.517 0 11.8 5.283 11.8 11.8zm.2 0c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12s5.373-12 12-12c6.628 0 12 5.373 12 12z"
                    clipRule="evenodd"
                ></motion.path>
                <path

                    d="M18.073 28c7.732 0 14-6.268 14-14h-2c0 6.627-5.372 12-12 12v2zm-14-14c0 7.732 6.268 14 14 14v-2c-6.627 0-12-5.373-12-12h-2zm14-14c-7.732 0-14 6.268-14 14h2c0-6.627 5.373-12 12-12V0zm14 14c0-7.732-6.268-14-14-14v2c6.628 0 12 5.373 12 12h2zm-14 15c8.285 0 15-6.716 15-15h-2c0 7.18-5.82 13-13 13v2zm-15-15c0 8.284 6.716 15 15 15v-2c-7.18 0-13-5.82-13-13h-2zm15-15c-8.284 0-15 6.716-15 15h2c0-7.18 5.82-13 13-13v-2zm15 15c0-8.284-6.715-15-15-15v2c7.18 0 13 5.82 13 13h2zm-15 12.8c7.07 0 12.8-5.73 12.8-12.8h-2c0 5.965-4.835 10.8-10.8 10.8v2zM5.273 14c0 7.07 5.731 12.8 12.8 12.8v-2c-5.964 0-10.8-4.835-10.8-10.8h-2zm12.8-12.8c-7.069 0-12.8 5.73-12.8 12.8h2c0-5.965 4.836-10.8 10.8-10.8v-2zm12.8 12.8c0-7.07-5.73-12.8-12.8-12.8v2c5.965 0 10.8 4.835 10.8 10.8h2zm-12.8 13c7.18 0 13-5.82 13-13h-2c0 6.075-4.924 11-11 11v2zm-13-13c0 7.18 5.82 13 13 13v-2c-6.075 0-11-4.925-11-11h-2zm13-13c-7.18 0-13 5.82-13 13h2c0-6.075 4.925-11 11-11V1zm13 13c0-7.18-5.82-13-13-13v2c6.076 0 11 4.925 11 11h2z"
                    mask="url(#path-3-inside-1_4_35)"
                ></path>
                <path

                    stroke="#FFF"
                    strokeWidth="0.1"
                    d="M23 5l-7-1m4.5 1.5L16 5M26 11l-1.5 5.5m.5-4L23.5 17"
                ></path>

                //rocket
                <motion.path
                    fill={'url(#rocket)'}
                    stroke="#000"
                    strokeWidth="0.5"
                    d="M24.5 12c3-4 1-6 1-6s-3.5 0-7 1-6.5 5-7 4.5-11 2-11 2.5 7 .5 7 1 1 .5 1.5.5 0 2 0 2c1.251 2.01 2.018 2.682 3.5 3 0 0 1.5-.5 1.5 0s-1.5 2-.5 2.5 2.5 1 2.5 2.5 1-5.5.5-6 5-3.5 8-7.5z"
                ></motion.path>


                //fire
                <motion.path
                    fill={'url(#fire)'}
                    strokeWidth="0.5"
                    d="M4.613 21.408c-.946-.57 4.443-3.984 4.443-3.984.859 1.45 1.628 2.14 3.424 3.192 0 0-3.426 6.483-3.098 4.595.329-1.888-5.25.878-5.25.878s1.428-4.11.481-4.681z"
                ></motion.path>
                <defs>
                    <filter
                        id="filter0_d_4_35"
                        width="18.788"
                        height="17.418"
                        x="8.186"
                        y="8.283"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dy="4"></feOffset>
                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                        <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_4_35"
                        ></feBlend>
                        <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_4_35"
                            result="shape"
                        ></feBlend>
                    </filter>
                </defs>
            </motion.svg>
        </>
    );
};

export default LogoProjectIcon;
