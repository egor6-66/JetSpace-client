import React, {FC, useEffect, useState} from 'react';
import {UseAnimate, UseColor} from '../../../../assets/hooks'
import {useInterval} from 'react-use';
import {AnimatePresence, motion} from "framer-motion";


interface UserTypingProps {
    userName: any
}

const UserTyping: FC<UserTypingProps> = ({userName}) => {

    const colors = UseColor()

    const [name, setName] = useState<any>(null);
    const [delay, setDelay] = useState<number>(1000);
    const [isRunning, setIsRunning] = useState<boolean>(true);

    useEffect(() => {
        name ? setDelay(8000) : setDelay(1000)
    }, [name])

    useEffect(() => {
        // setName(`${userName}__печатает`)
        userName ? setIsRunning(true) : setIsRunning(false)
    }, [userName])

    useInterval(
        () => {
            name ? setName('') : setName(`${userName}__печатает`);
        },
        isRunning ? delay : null
    );
    console.log(colors)

    return (

        userName ?
            <>
                <motion.div
                    style={{
                        display: "flex",
                        height: '30px',
                        width: 'auto',
                        alignItems: 'center',
                        justifyContent: "center",
                        position: 'absolute',
                        bottom: '58px',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}>
                    {name &&
                    name?.split('').map((name: string, index: number) =>
                        <motion.div
                            style={{
                                fontSize: 20,
                                color: colors?.text?.active,
                            }}
                            key={index}
                            variants={UseAnimate('typing-text')}
                            initial='hidden'
                            animate='visible'
                            custom={index}
                        >
                            {name}
                        </motion.div>
                    )}
                    {userName &&
                    <motion.div
                        style={{
                            backgroundColor: colors?.text?.active,
                            marginLeft: '5px',
                            width: '5px',
                            height: '20px',
                        }}
                        variants={UseAnimate('hidden-visible')}
                        initial='hidden'
                        animate='visible'
                    />
                    }
                </motion.div>
            </>
            :
            <div></div>
    )
};

export default UserTyping;