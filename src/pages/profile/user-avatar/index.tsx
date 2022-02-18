import React, {FC, useState} from 'react';
import ImgCrop from "antd-img-crop";
import {Upload} from "antd";
import {useMutation} from "react-apollo";
import {EDIT_USER_AVATAR} from "../../../GRAPHQL/mutations";

interface UserAvatarProps {
    myId: string | undefined,
}

const UserAvatar: FC<UserAvatarProps> = ({myId}) => {

    const [editUserAvatar] = useMutation(EDIT_USER_AVATAR)



    const onChange = async ({file}: any) => {


        // await newAvatar && editUserAvatar({
        //     variables: {
        //         input:{
        //             id: myId,
        //             avatar: file.originFileObj
        //         }
        //     },
        // }).then(async(data) =>{
        //     // console.log(data)
        // })
    }

    return (
        <div className='left-block__avatar'>
            <ImgCrop  rotate>
                <Upload
                    onChange={onChange}
                    customRequest={()=>{}}
                    // beforeUpload={()=>{ return false}}
                >
                    UserAvatar
                </Upload>
            </ImgCrop>
            {/*<img src={img} alt=""/>*/}
        </div>
    );
};

export default UserAvatar;