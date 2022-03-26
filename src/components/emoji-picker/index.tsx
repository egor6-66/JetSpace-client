import React from 'react';
import Picker from "emoji-picker-react";

const EmojiPicker = ({onEmojiClick}: any) => {
    return (
        <Picker
            onEmojiClick={onEmojiClick}
            disableSkinTonePicker={true}
            disableSearchBar={true}
        />
    );
};

export default EmojiPicker;