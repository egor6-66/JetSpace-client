import React from 'react';
import {motion} from "framer-motion";
import {UseColor} from "../hooks";

const SoundCloudIcon = () => {

    const colors = UseColor()

    const svgVar = {
        hidden: {
            scale: 1,
        },
        visible: {
            scale: 1,
            transition: {
                duration: 1
            }
        }
    };

    const pathVar = {
        hidden: {
            scale: 1,
        },
        visible: {
            scale: 1.4,
            // pathLength: 1,
            transition: {
                ease: 'easeInOut',
                yoyo: Infinity
            }
        }
    }

    const pathVariants = []

    for (let i =0; i < 10; i++ ){
        pathVariants.push({
            hidden: {
                scale: 1.2,
            },
            visible: {
                scale: i / 10,
                // pathLength: 1,
                transition: {
                    duration: i / 10 + 1,
                    ease: 'easeInOut',
                    yoyo: Infinity
                }
            }
        })
    }

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
            width={200}
            height={150}
            variants={svgVar}
            initial='hidden'
            animate='visible'
            fill={colors?.svg?.svg}
            // style={{padding: 40}}
        >
            <motion.path
                fill={colors?.svg?.svg}
                d="M.25 17.5c-.031-.503-.25-2-.25-2s.219-2.497.25-3c.017-.276.224-.5.5-.5s.483.224.5.5c.031.503.25 3 .25 3s-.219 1.497-.25 2c-.017.276-.224.5-.5.5s-.483-.224-.5-.5z"
                variants={pathVariants[0]}
            />

            <g>
                <motion.path
                    fill={colors?.svg?.svg}
                    d="M.25 17.5c-.031-.503-.25-2-.25-2s.219-2.497.25-3c.017-.276.224-.5.5-.5s.483.224.5.5c.031.503.25 3 .25 3s-.219 1.497-.25 2c-.017.276-.224.5-.5.5s-.483-.224-.5-.5z"
                    variants={pathVariants[1]}
                />
            </g>
            <motion.path
                fill={colors?.svg?.svg}
                d="M1.25 12.5c-.017-.276-.224-.5-.5-.5v6c.276 0 .483-.224.5-.5.031-.503.25-2 .25-2s-.219-2.497-.25-3z"
                variants={pathVariants[2]}
                opacity="0.1"
            />
            <motion.g
            >
                <motion.path
                    fill={colors?.svg?.svg}
                    d="M3 9.5c.007-.276.224-.5.5-.5s.493.224.5.5c.031 1.251.25 6 .25 6s-.219 2.248-.25 3c-.011.276-.224.5-.5.5s-.489-.224-.5-.5c-.031-.752-.25-3-.25-3s.219-4.749.25-6z"
                    variants={pathVariants[3]}
                />
            </motion.g>
            <motion.path
                fill={colors?.svg?.svg}
                d="M4 9.5a.504.504 0 00-.5-.5v10a.507.507 0 00.5-.5c.031-.752.25-3 .25-3s-.219-4.749-.25-6z"
                opacity="0.1"
            />
            <g>
                <linearGradient
                    id="SVGID_3_"
                    x1="6.5"
                    x2="6.5"
                    y1="10"
                    y2="19"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#FEC111"></stop>
                    <stop offset="1" stopColor="#E78424"></stop>
                </linearGradient>
                <motion.path
                    fill={colors?.svg?.svg}
                    d="M6 10.5c.009-.276.224-.5.5-.5s.491.224.5.5c.031 1.001.25 5 .25 5s-.219 2.248-.25 3c-.011.276-.224.5-.5.5s-.489-.224-.5-.5c-.031-.752-.25-3-.25-3s.219-3.999.25-5z"
                    variants={pathVariants[4]}
                ></motion.path>
            </g>
            <motion.path
                fill={colors?.svg?.svg}
                d="M7 10.5a.505.505 0 00-.5-.5v9a.507.507 0 00.5-.5c.031-.752.25-3 .25-3s-.219-3.999-.25-5z"
                variants={pathVariants[5]}
                opacity="0.1"
            ></motion.path>
            <g>
                <linearGradient
                    id="SVGID_4_"
                    x1="9.5"
                    x2="9.5"
                    y1="6"
                    y2="19"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#FEC111"></stop>
                    <stop offset="1" stopColor="#E78424"></stop>
                </linearGradient>
                <motion.path
                    fill={colors?.svg?.svg}
                    d="M9 6.5c.004-.276.224-.5.5-.5s.496.224.5.5c.031 2 .25 9 .25 9s-.219 2.248-.25 3c-.011.276-.224.5-.5.5s-.489-.224-.5-.5c-.031-.752-.25-3-.25-3s.219-7 .25-9z"
                    variants={pathVariants[6]}
                ></motion.path>
            </g>
            <motion.path
                fill={colors?.svg?.svg}
                d="M10 6.5a.503.503 0 00-.5-.5v13a.507.507 0 00.5-.5c.031-.752.25-3 .25-3s-.219-7-.25-9z"
                opacity="0.1"
                variants={pathVariants[7]}
            ></motion.path>
            <linearGradient
                id="SVGID_5_"
                x1="18"
                x2="18"
                y1="5"
                y2="19"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#FEC111"></stop>
                <stop offset="1" stopColor="#E78424"></stop>
            </linearGradient>
            <motion.path
                fill={colors?.svg?.svg}
                d="M12 19h7.5a4.5 4.5 0 100-9c-.265 0-.521.034-.774.078A6.998 6.998 0 0012 5"
                variants={pathVariants[8]}
            ></motion.path>
            <motion.path
                fill={colors?.svg?.svg}
                d="M18.773 10.315a4.52 4.52 0 01.78-.079c1.873 0 3.485 1.098 4.175 2.72A4.457 4.457 0 0019.5 10c-.265 0-.521.034-.774.078A6.998 6.998 0 0012 5v.201a7.047 7.047 0 016.773 5.114z"
                variants={pathVariants[9]}
                opacity="0.2"
            ></motion.path>
            <motion.path
                fill={colors?.svg?.svg}
                d="M19.5 18.75H12V19h7.5a4.5 4.5 0 004.5-4.5c0-.043-.011-.082-.013-.125A4.493 4.493 0 0119.5 18.75z"
                opacity="0.1"
                variants={pathVariants[10]}
            ></motion.path>
            <linearGradient
                id="SVGID_6_"
                x1="1.82"
                x2="22.513"
                y1="9.039"
                y2="18.689"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#FFF" stopOpacity="0.2"></stop>
                <stop offset="1" stopColor="#FFF" stopOpacity="0"></stop>
            </linearGradient>

        </motion.svg>
    );
};

export default SoundCloudIcon;