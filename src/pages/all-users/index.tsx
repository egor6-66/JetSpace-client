import React, {FC} from 'react';
import {NavLink, Link} from "react-router-dom";
import {ColorsModel} from '../../models';
import {AllUsersIcons} from '../../assets/icons'
import {useQuery} from '@apollo/client';
import {GET_ALL_USERS} from "../../GRAPHQL/queries/user-queries";
import {Avatar, Popover, Typography} from "antd";
import {motion} from "framer-motion";
import './all-users.less';


interface allUserProps {
    myId: string | undefined,
    colors: ColorsModel.IColors | null,
}

const AllUsers: FC<allUserProps> = ({myId, colors}) => {

    const {Title, Text} = Typography;
    const {data, refetch, loading, error} = useQuery(GET_ALL_USERS);
    console.log(data)
    return (
        <div className='all-users'>
            {loading ?
                <div>
                    loading
                </div>
                :
                <motion.div className='users-list'
                            initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                >
                    {data?.getAllUsers.map((user: any, index: number) =>
                        <div key={user.id} className='user'
                             style={{border: `2px solid ${colors?.border?.active}`}}
                        >
                            <Title level={5}
                                   className='user__is-online'
                                   style={{color: user.isOnline ? colors?.text?.active : colors?.text?.disabled}}
                            >
                                {user.isOnline ? 'online' : 'offline'}
                            </Title>
                            <Title level={2} className='user__name'>{user.name}<br/> {user.lastName}</Title>
                            <Avatar size={220} className='user__avatar' src={user.avatar} alt=""/>
                            <div className='user__bottom-block'>
                                {myId !== user.id &&
                                <Popover mouseEnterDelay={0.2}
                                         content={
                                             <div className='user__bottom-block-popover'>
                                                 <Text>
                                                     {user.subscriptions.find((i: any) => i.userId === myId) ?
                                                         'подписан на вас' : 'не подписан на вас'
                                                     }
                                                 </Text>
                                                 <Text>
                                                     {user.subscribers.find((i: any) => i.userId === myId) ?
                                                         'вы подписаны' : 'вы не подписаны'
                                                     }
                                                 </Text>
                                             </div>
                                         }>
                                    <div className='user__bottom-block_icon'>
                                        <AllUsersIcons id='follow' colors={colors}/>
                                    </div>
                                </Popover>}
                                <Popover mouseEnterDelay={0.2}
                                         content={<Text>перейти на страницу</Text>}
                                >
                                    <NavLink key={user.id}
                                          to={`/user/${user.id}/profile/posts`}
                                          className='user__bottom-block_icon'
                                          style={{color: colors?.text?.active}}
                                    >
                                        <AllUsersIcons id='go-page' colors={colors}/>
                                    </NavLink>
                                </Popover>
                                {myId !== user.id &&
                                <Popover mouseEnterDelay={0.2}
                                         content={<Text>написать сообщение</Text>}
                                >
                                    <NavLink key={user.id}
                                          to={`/user/${myId}/profile/message/${user.id}`}
                                          className='user__bottom-block_icon'
                                          style={{color: colors?.text?.active}}
                                    >
                                        <AllUsersIcons id='message' colors={colors}/>
                                    </NavLink>
                                </Popover>}
                                {myId !== user.id &&
                                <Popover mouseEnterDelay={0.2}
                                         content={<Text>позвонить</Text>}
                                >
                                    <NavLink key={user.id}
                                             to={`/user/${myId}/profile/audioCall/${user.id}`}
                                             className='user__bottom-block_icon'
                                             style={{color: colors?.text?.active}}
                                    >
                                        <AllUsersIcons id='phone' colors={colors}/>
                                    </NavLink>
                                </Popover>}
                                {myId !== user.id &&
                                <Popover mouseEnterDelay={0.2}
                                         content={<Text>видео звонок</Text>}
                                >
                                    <NavLink key={user.id}
                                             to={`/user/${myId}/profile/videoCall/${user.id}`}
                                             className='user__bottom-block_icon'
                                             style={{color: colors?.text?.active}}
                                    >
                                        <AllUsersIcons id='video' colors={colors}/>
                                    </NavLink>
                                </Popover>}
                            </div>
                        </div>
                    )}
                </motion.div>
            }
        </div>
    );
};

export default AllUsers;
