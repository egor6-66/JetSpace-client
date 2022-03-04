import React, {FC, useState} from 'react';
import {useLazyQuery} from "@apollo/client";
import wordDeclension from "../../../assets/functions/word-declension";
// import {GET_ALL_LIKES} from "../../../GRAPHQL/queries/like-queries";
import {Typography, Modal, Button} from "antd";
import './all-likes.less';


interface AllLikesProps {
    likeCounter: number | undefined,
    currentId: string | undefined,
}


const AllLikes: FC<AllLikesProps> = ({likeCounter, currentId}) => {

    const {Title, Text} = Typography;

    const [isShowAllLikes, setIsShowAllLikes] = useState<boolean>(false)

    const word = wordDeclension({
        length: likeCounter || 0,
        word: 'лайк',
        suffix: ['a', 'ов'],
    })

    // const [getAllLikes, {loading, data}] = useLazyQuery(GET_ALL_LIKES, {
    //     fetchPolicy: 'cache-and-network',
    //     variables: {
    //         id: currentId,
    //     }
    // });

    const clickOnAllLikes = () => {
        setIsShowAllLikes(true)
        // getAllLikes()
    }

    const closed = () => {
        setIsShowAllLikes(false)
    }
    // console.log(data?.getAllLikes)
    return (
        <>
            <div className='all-likes'
                 onClick={clickOnAllLikes}
            >
                <Title level={2}>{likeCounter || 0} {word}</Title>
            </div>
            <Modal
                className='all-likes-modal'
                title={<Title style={{textAlign: "center"}} level={2}>{likeCounter || 0} {word}</Title>}
                bodyStyle={{display: "flex", flexDirection: "column", gap: '20px'}}
                footer={[<Button key="close" onClick={closed}>закрыть</Button>]}
                visible={isShowAllLikes}
                onCancel={closed}
            >
                {/*{data?.getAllLikes && data?.getAllLikes.map(({like, post}: any) =>*/}
                {/*    <div key={like.id} className='all-likes-modal__item'>*/}
                {/*        <div className='all-likes-modal__item_left-block'>*/}
                {/*            <img src={like.userAvatar} alt=""/>*/}
                {/*            <Title level={4}>{like.userName} {like.userLastName}</Title>*/}
                {/*            <Text >{like.date}</Text>*/}
                {/*        </div>*/}
                {/*        <div className='right-block'>*/}
                {/*            <Title level={5}>{post.date}</Title>*/}
                {/*            <Text>{post.content}</Text>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}
            </Modal>
        </>
    );
};

export default AllLikes;