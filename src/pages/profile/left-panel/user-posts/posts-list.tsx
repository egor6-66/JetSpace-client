import React, {FC, useState} from 'react';
import {Collapse, Typography} from "antd";
import moment from "moment";
import {CommentsIcon, DislikeIcon, LikeIcon} from "../../../../assets/icons";
import AllComments from "../../../../components/comment/all-comments";
import {ICurrentUser} from "../../../../models/current-user";


interface PostsListProps {
    myId: string | undefined,
    data: any,
    currentUser: ICurrentUser,
    postRef: any,
    likeClick: any,
    dislikeClick: any,
    isActive: any,
    commentsRef: any,
    currentId: string | undefined
    scrollBottom: any,
    scrollTop: any,
}

const PostsList: FC<PostsListProps> = ({
                                           myId, data, currentUser, postRef, likeClick, dislikeClick,
                                           isActive, commentsRef, currentId, scrollBottom, scrollTop
                                       }) => {

    const {Title, Text} = Typography;
    const {Panel} = Collapse;

    const [activePostId, setActivePostId] = useState<any>(null);

    return (
        <div className='posts__list'>
            <Collapse
                bordered={false}
                activeKey={activePostId}
                destroyInactivePanel={true}
            >
                {data?.getUserPosts?.posts?.map(({id, date, content, likes, dislikes, comments}: any, index: number) =>
                    <Panel key={id} showArrow={false} header={
                        <div ref={id === activePostId ? postRef : null} className='posts__list_item post-item'>
                            <div className='post-item__top-block'>
                                <img className='post-item__top-block_avatar' src={currentUser.avatar} alt=""/>
                                <div className='post-item__top-block_userNameAndData'>
                                    <Title level={4}>{currentUser?.name} {currentUser.lastName}</Title>
                                    <Text>{moment.unix(date).calendar()}</Text>
                                </div>
                            </div>
                            <div className='post-item__center-block'>
                                <Title level={5}>{content}</Title>
                            </div>
                            <div className='post-item__bottom-block'>
                                <div className='post-item__bottom-block_like'>
                                    <div className={`like-icon ${isActive(likes) && 'like-icon__active'}`}
                                         onClick={() => likeClick(id, likes)}
                                    >
                                        <LikeIcon/>
                                    </div>
                                    <Title level={4}>{likes && likes.length}</Title>
                                </div>
                                <div className='post-item__bottom-block_dislike'>
                                    <div className={`dislike-icon ${isActive(dislikes) && 'dislike-icon__active'}`}
                                         onClick={() => dislikeClick(id, dislikes)}
                                    >
                                        <DislikeIcon/>
                                    </div>
                                    <Title level={4}>{dislikes && dislikes.length}</Title>
                                </div>
                                <div className='post-item__bottom-block_comments' onClick={() => {
                                    id === activePostId ? setActivePostId(null) : setActivePostId(id)
                                }}>
                                    <div className='comments-icon'>
                                        <CommentsIcon/>
                                    </div>
                                    <Title level={4}>{comments.length}</Title>
                                </div>
                            </div>
                        </div>
                    }>
                        <AllComments
                            commentsRef={commentsRef}
                            ownerId={currentId}
                            userId={myId}
                            post={data?.getUserPosts?.posts?.find((post: any) => post?.id === activePostId)}
                            scrollBottom={scrollBottom}
                            scrollTop={scrollTop}
                        />
                    </Panel>
                )}
            </Collapse>
        </div>
    );
};

export default PostsList;
