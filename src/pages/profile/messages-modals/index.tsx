import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Picker from 'emoji-picker-react';
import {getWidth, getHeight} from "../../../assets/functions/get-area";
import Smile from "../../../assets/icon/smile";
import {Modal, Form, Input, Button} from "antd";
import './messages-modal.less'


const MessagesModal = () => {

    const navigate = useNavigate();

    const [chosenEmoji, setChosenEmoji] = useState<any>(null);
    const [isVisiblePicker, setIsVisiblePicker] = useState<boolean>(false)
    const [newMessage, setNewMessage] = useState<string>('')

    const onEmojiClick = (event: any, emojiObject: any) => {
        setNewMessage(newMessage + emojiObject.emoji)
    };
const [m, setM] = useState<string>('')

    const submit = () => {
      setM(newMessage)
        setNewMessage('')
    }

    return (
        <Modal className='messages-modal'
               title="Basic Modal"
               visible={true}
               width={getWidth(400)}
               bodyStyle={{
                   height: getHeight(200),
                   display: 'flex',
                   flexDirection: 'column',
                   justifyContent: 'space-between'
               }}
               onCancel={() => navigate(-1,)}
               footer={false}
        >
            <div className='messages-modal__content'>
                {m}
            </div>
            <div className='messages-modal__input'>
                <Input value={newMessage} onChange={(e) => setNewMessage(e.target.value)}/>
                <div onMouseEnter={() => setIsVisiblePicker(true)}><Smile/></div>
                <Button onClick={submit}>отправить</Button>
            </div>
            {isVisiblePicker &&
            <div className='picker' onMouseLeave={() => setIsVisiblePicker(false)}>
                <Picker
                    onEmojiClick={onEmojiClick}
                    disableSkinTonePicker={true}
                    disableSearchBar={true}
                />
            </div>}
        </Modal>
    );
};

export default MessagesModal;