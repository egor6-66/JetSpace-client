import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from "../../GRAPHQL/queries/user-queries";
import './all-users.less';


const AllUsers = () => {

    const {data, refetch, loading, error} = useQuery(GET_ALL_USERS);

    return (
        <div className='all-users'>
            {loading ?
                <div>
                    loading
                </div>
                :
                <div className='users-list'>
                    {data.getAllUsers.map((user: any) =>
                        <div className='users-list__item' key={user.id}>
                            <Link to={`/user/${user.id}/profile`}>
                                {user.name}
                            </Link>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default AllUsers;
