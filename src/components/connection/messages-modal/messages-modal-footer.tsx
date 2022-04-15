import React, {FC, useState} from 'react';
import TextArea from "antd/es/input/TextArea";
import VoiceMessages from "./voice-messages";
import {Button, Popover, Slider} from "antd";
import {MicrophoneIcon, PlayerIcons, SmileIcon} from "../../../assets/icons";
import EmojiPicker from "../../emoji-picker";
import {useActions} from "../../../store/actions";
import {useTypedSelector} from "../../../store";


interface MessagesModalFooterProps {
    newMessage: string | undefined,
    setNewMessage: any,
    addMessage: any,
    myId: string | undefined,
    userId: string | undefined,
    submit: any,
}

const MessagesModalFooter: FC<MessagesModalFooterProps> = ({newMessage, setNewMessage, addMessage, myId, userId, submit}) => {

    const {setVoiceMessageVolume} = useActions();

    const {voiceMessageVolume} = useTypedSelector(state => state.player);
    const [isRecord, setIsRecord] = useState<boolean>(false);
    const [sendVoice, setSendVoice] = useState<boolean>(false);

    const onEmojiClick = (event: any, emojiObject: any) => setNewMessage(newMessage + emojiObject.emoji)

    return (
        <div className='messages-modal__footer'>
            <TextArea value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onPressEnter={e => e.code === 'Enter' && !e.ctrlKey && !e.altKey && submit()}

            />
            <VoiceMessages
                isRecord={isRecord}
                addMessage={addMessage}
                sendVoice={sendVoice}
                myId={myId}
                userId={userId}
            />
            <div className='messages-modal__footer_svg'>
                <Popover visible={isRecord} content={
                    <div>
                        <Button onClick={() => {
                            setIsRecord(false)
                            setSendVoice(false)
                        }}>
                            отмена
                        </Button>
                        <Button onClick={() => {
                            setTimeout(() => setSendVoice(true), 100)
                            setIsRecord(false)
                        }}>
                            отправить
                        </Button>
                    </div>
                }>
                    <div style={{display: "flex", alignItems: "center"}} onClick={() => {
                        setSendVoice(false)
                        setIsRecord(true)
                    }}>
                        <MicrophoneIcon/>
                    </div>
                </Popover>
                <Popover content={
                    <Slider vertical step={0.1} style={{height: 50}} min={0} max={100}
                            onChange={(value) => setVoiceMessageVolume(value)}
                            value={voiceMessageVolume}
                    />
                }
                    >
                    <div className='voice-player__icon'>
                        {<PlayerIcons id={'volume'}/>}
                    </div>
                </Popover>
                {!isRecord &&
                <Popover placement={"topRight"} content={<EmojiPicker onEmojiClick={onEmojiClick}/>}>
                    <div style={{display: "flex", alignItems: "center"}}><SmileIcon/></div>
                </Popover>}
            </div>
            <Button onClick={submit}>отправить</Button>
        </div>
    );
};

export default MessagesModalFooter;
