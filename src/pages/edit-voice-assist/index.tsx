import React from 'react';
import ParamsSettings from "./params-settings";
import {useTypedSelector} from "../../store";
import {useActions} from "../../store/actions";
import ResponseSettings from "./response-settings";
import {motion} from "framer-motion";
import {Collapse, Typography} from 'antd';
import './edit-profile-assist.less';

const EditVoiceAssist = () => {

    const {Panel} = Collapse;
    const {Title} = Typography;

    const {isActivated} = useTypedSelector(state => state.voiceAssist);
    const {setActiveVoiceAssist, setParamsSettings, setVoiceResponse} = useActions();
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


    const onFinishParamsSettings = (values: any) => {
        if (values.name) values.name = values.name.charAt(0).toUpperCase() + values.name.slice(1)
        setParamsSettings(values)
    };

    const onFinishResponseSettings = (values: any) => {
        setVoiceResponse(values.response)
    };

    return (
        <motion.div className='edit-profile-assist'
                    initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}}
        >
            <Collapse className='edit-profile-assist__collapse'>
                <Panel showArrow={false} header={<Title level={2}>параметры</Title>} key="1">
                    <ParamsSettings
                        onFinishParamsSettings={onFinishParamsSettings}
                        isActivated={isActivated}
                        setActiveVoiceAssist={setActiveVoiceAssist}
                    />
                </Panel>
                <Panel showArrow={false} header={<Title level={2}>комманды</Title>} key="2">
                    <p>{text}</p>
                </Panel>
                <Panel showArrow={false} header={<Title level={2}>ответы</Title>} key="3">
                    <ResponseSettings onFinishResponseSettings={onFinishResponseSettings}/>
                </Panel>
            </Collapse>
        </motion.div>
    );
};

export default EditVoiceAssist;