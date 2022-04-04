import React, {FC} from 'react';


interface UserNewsProps {
    myId: string | undefined
    colors: any,
}

const UserNews: FC<UserNewsProps> = ({myId, colors}) => {
    return (
        <div className='my-friends'>
            <div className='left-block'>

            </div>
            Friends
        </div>
    );
};

export default UserNews;