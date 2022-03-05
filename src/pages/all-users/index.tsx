import React from 'react';
import {Link} from "react-router-dom";
import {useQuery} from '@apollo/client';
import {GET_ALL_USERS} from "../../GRAPHQL/queries/user-queries";
import {Typography} from "antd";
import './all-users.less';


const AllUsers = () => {

    const {Title} = Typography;
    const {data, refetch, loading, error} = useQuery(GET_ALL_USERS);

    return (
        <div className='all-users'>
            {loading ?
                <div>
                    loading
                </div>
                :
                <div className='users-list'>
                    {data?.getAllUsers.map((user: any, index: number) =>
                        <Link key={user.id} className='users-list__item' to={`/user/${user.id}/profile`}>
                            <img className='users-list__item_avatar' src={user.avatar} alt=""/>
                            <Title level={2} className='users-list__item_name'>{user.name} {user.lastName}</Title>
                        </Link>
                    )}
                </div>
            }
        </div>
    );
};

export default AllUsers;
