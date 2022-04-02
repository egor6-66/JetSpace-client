import React, {FC} from 'react';
import TextArea from "antd/es/input/TextArea";
import {Button, Popover} from "antd";
import EmojiPicker from "../../../../components/emoji-picker";
import {SmileIcon} from "../../../../assets/icons";


interface PostFormProps {
    newPost: string,
    setNewPost: any,
    sendNewPost: any,
}

const PostForm: FC<PostFormProps> = ({newPost, setNewPost, sendNewPost}) => {

    const onEmojiClick = (event: any, emojiObject: any) => setNewPost(newPost + emojiObject.emoji);

    return (
        <div className='posts__form'>
            <div className='posts__form_input'>
                <TextArea className='textarea'
                          value={newPost}
                          onChange={(e) => setNewPost(e.target.value)}
                          onPressEnter={e => e.code === 'Enter' && !e.ctrlKey && !e.altKey && sendNewPost()}

                />
                <Popover placement={"left"} content={<EmojiPicker onEmojiClick={onEmojiClick}/>}>
                    <div className='emojiPicker'>
                        <SmileIcon/>
                    </div>
                </Popover>
            </div>
            <Button className='posts__form_submit'
                    onClick={sendNewPost}>
                Submit
            </Button>
        </div>
    );
};

export default PostForm;
