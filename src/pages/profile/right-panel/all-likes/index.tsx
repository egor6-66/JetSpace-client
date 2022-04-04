import React, {FC, useState} from 'react';
import {useLazyQuery} from "@apollo/client";
import wordDeclension from "../../../../assets/functions/word-declension";
import {GET_ALL_LIKES} from "../../../../GRAPHQL/queries/like-queries";
import {UseAnimate, UseGetContainerHeight} from '../../../../assets/hooks';
import {Typography, Modal, Button, Avatar} from "antd";
import {motion} from "framer-motion";
import './all-likes.less';
import moment from "moment";


interface AllLikesProps {
    likeCounter: number | undefined,
    currentId: string | undefined,
    myId: string | undefined,
    colors: any
}


const AllLikes: FC<AllLikesProps> = ({likeCounter, currentId,myId, colors}) => {

    const {Title, Text} = Typography;
    const height = UseGetContainerHeight(360, 990, 600);
    const [isShowAllLikes, setIsShowAllLikes] = useState<boolean>(false)
    const word = wordDeclension({
        length: likeCounter || 0,
        word: 'лайк',
        suffix: ['a', 'ов'],
    })

    const [getAllLikes, {loading, data}] = useLazyQuery(GET_ALL_LIKES, {
        fetchPolicy: 'cache-and-network',
        variables: {
            id: currentId,
        }
    });

    const clickOnAllLikes = () => {
        setIsShowAllLikes(true)
        getAllLikes()
    }

    const closed = () => {
        setIsShowAllLikes(false)
    }

const getName = (like: any) => {
    return   like.userId === myId ? 'вы' : `${like.userName} ${like.userLastName? like.userLastName : ''}`
}

    return (
        <div>
            <div className='all-likes'
                 style={{borderBottom: `2px solid ${colors?.border?.active}`}}
                 onClick={clickOnAllLikes}
            >
              {likeCounter || 0} {word}
            </div>
            <Modal
                destroyOnClose={true}
                className='all-likes-modal'
                title={<Title style={{textAlign: "center"}} level={2}>{likeCounter || 0} {word}</Title>}
                bodyStyle={{display: "flex", flexDirection: "column", gap: '20px', height:height, overflowY: "scroll"}}
                footer={[<Button key="close" onClick={closed}>закрыть</Button>]}
                visible={isShowAllLikes}
                onCancel={closed}
            >
                {data?.getAllLikes.map((like: any, index: number) =>
                    <motion.div key={like.id} className='all-likes-modal__item'
                                custom={index}
                                initial='hidden'
                                animate="visible"
                                variants={UseAnimate('arrayIteration')}
                    >
                        <div className='all-likes-modal__item_left-block'>
                            <Avatar size={70} src={like.userAvatar}/>
                        </div>
                        <div className='right-block'>
                            <Title level={4}>{getName(like)}</Title>
                            <Text >{moment.unix(like.date).calendar()}, понравилась запись</Text>
                            <Text>сделанная {moment.unix(like.contentDate).calendar()}</Text>
                            <div className='right-block__content'>
                                <Text>{like.content}</Text>
                            </div>
                        </div>
                    </motion.div>
                )}
            </Modal>
        </div>
    );
};

export default AllLikes;