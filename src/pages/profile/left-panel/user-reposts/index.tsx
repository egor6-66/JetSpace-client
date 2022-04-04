import React, {FC} from 'react';


interface UserRepostsProps{
    myId: string | undefined,
    colors: any,
}

const UserReposts:FC<UserRepostsProps> = ({myId, colors}) => {
    return (
        <div>
            UserReposts
        </div>
    );
};

export default UserReposts;