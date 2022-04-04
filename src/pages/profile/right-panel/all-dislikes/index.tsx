import React, {FC, useState} from 'react';
import wordDeclension from "../../../../assets/functions/word-declension";
import {useLazyQuery} from "@apollo/client";
import {GET_ALL_DISLIKES} from "../../../../GRAPHQL/queries/dislike-queries";
import {UseAnimate, UseGetContainerHeight} from "../../../../assets/hooks";
import moment from "moment";
import {Avatar, Button, Modal, Typography} from "antd";
import {motion} from "framer-motion";
import './all-dislikes.less';


interface AllDislikesProps {
    dislikeCounter: number,
    currentId: string | undefined
    colors: any
}


const AllDislikes: FC<AllDislikesProps> = ({dislikeCounter, currentId, colors}) => {

    const {Title, Text} = Typography;
    const height = UseGetContainerHeight(360, 990, 600)
    const word = wordDeclension({
        length: dislikeCounter,
        word: 'дизлайк',
        suffix: ['a', 'ов'],
    });
    const [isShowAllDislikes, setIsShowAllDislikes] = useState<boolean>(false);

    const [getAllDislikes, {loading, data}] = useLazyQuery(GET_ALL_DISLIKES, {
        fetchPolicy: 'cache-and-network',
        variables: {
            id: currentId,
        }
    });

    const clickOnAllLikes = () => {
        setIsShowAllDislikes(true)
        getAllDislikes()
    }

    const closed = () => {
        setIsShowAllDislikes(false)
    }

    return (
        <>
            <div className='all-dislikes'
                 style={{borderBottom: `2px solid ${colors?.border?.active}`}}
                 onClick={clickOnAllLikes}
            >
                {dislikeCounter || 0} {word}
            </div>
            <Modal
                destroyOnClose={true}
                className='all-likes-modal'
                title={<Title style={{textAlign: "center"}} level={2}>{dislikeCounter || 0} {word}</Title>}
                bodyStyle={{display: "flex", flexDirection: "column", gap: '20px', height:height, overflowY: "scroll"}}
                footer={[<Button key="close" onClick={closed}>закрыть</Button>]}
                visible={isShowAllDislikes}
                onCancel={closed}
            >
                {data?.getAllDislikes.map((dislike: any, index: number) =>
                    <motion.div key={dislike.id} className='all-likes-modal__item'
                         custom={index}
                         initial='hidden'
                         animate="visible"
                         variants={UseAnimate('arrayIteration')}
                    >
                        <div className='all-likes-modal__item_left-block'>
                            <Avatar size={70} src={dislike.userAvatar}/>
                        </div>
                        <div className='right-block'>
                            <Title level={4}>{dislike.userName} {dislike.userLastName}</Title>
                            <Text>{moment.unix(dislike.date).calendar()}, не понравилась ваша запись</Text>
                            <Text>сделанная {moment.unix(dislike.contentDate).calendar()}</Text>
                            <div className='right-block__content'>
                                <Text>{dislike.content}</Text>
                            </div>
                        </div>
                    </motion.div>
                )}
            </Modal>
        </>
    );
};

export default AllDislikes;