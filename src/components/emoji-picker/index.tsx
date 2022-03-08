import React from 'react';
import Picker from "emoji-picker-react";

const EmojiPicker = ({onEmojiClick} :any) => {
    return (
        <div>
            <Picker
                onEmojiClick={onEmojiClick}
                disableSkinTonePicker={true}
                disableSearchBar={true}
            />
        </div>
    );
};

export default EmojiPicker;