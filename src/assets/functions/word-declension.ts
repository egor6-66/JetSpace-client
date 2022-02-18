interface wordDeclension {
    length: number,
    word: string,
    suffix: [string, string],
}

const wordDeclension = ({length, word, suffix}: wordDeclension) => {
        if (length === 1 || (length > 20 && length % 10 === 1)) {
            return `${word}`;
        } else if (length > 1 && length < 5 || (length > 20 && length % 10 > 1 && length % 10 < 5)) {
            return `${word}${suffix[0]}`;
        } else {
            return `${word}${suffix[1]}`;
        }
}

export default wordDeclension
