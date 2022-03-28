import React, {FC} from 'react';
import {UseColor} from "../hooks";
import {motion} from "framer-motion";


interface LogoIcon {
    size: number,
}

const LogoProjectIcon: FC<LogoIcon> = ({size}) => {

    const colors = UseColor()

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i :number) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    yoyo: Infinity,
                    pathLength: {
                        delay,
                        type: "spring",
                        duration: 1.5,
                        bounce: 0 ,

                    },
                    opacity: { delay, duration: 0.01 }
                }
            };
        }
    };


    return (
        <>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="126"
                version="1.1"
                viewBox="0 0 210 297"
                initial="hidden"
                animate="visible"
            >
                <g>
                    <ellipse
                        cx="96.048"
                        cy="148.67"
                        fill="red"
                        fillRule="evenodd"
                        strokeWidth="0.265"
                        rx="41.212"
                        ry="41.382"
                    ></ellipse>
                    <text
                        xmlSpace="preserve"
                        style={{ lineHeight: "1.25" }}
                        x="58.854"
                        y="177.828"
                        strokeWidth="1.762"
                        fontFamily="Tratags"
                        fontSize="70.486"
                        transform="scale(1.0509 .95157)"
                    >
                        <tspan x="58.854" y="177.828" strokeWidth="1.762">
                            j
                        </tspan>
                    </text>
                    <motion.text
                        xmlSpace="preserve"
                        style={{ lineHeight: "1.25" }}
                        x="103.386"
                        y="154.541"
                        strokeWidth="1.555"
                        fontFamily="Tratags"
                        fontSize="62.208"
                        transform="scale(.90607 1.10367)"
                        variants={draw}
                        custom={1}
                    >
                        <tspan x="103.386" y="154.541" strokeWidth="1.555">
                            s
                        </tspan>
                    </motion.text>
                </g>
            </motion.svg>
        </>
    );
};

export default LogoProjectIcon;
