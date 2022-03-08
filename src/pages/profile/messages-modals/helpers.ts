interface getNameProps {
    myId: string | undefined,
    userId: string | undefined,
    myName: {
        name: string | undefined,
        lastName: string | undefined,
    }
    userName: {
        name: string | undefined,
        lastName: string | undefined,
    }
}

export const getName = ({myId, userId, myName, userName}: getNameProps): string | undefined => {
    return myId === userId ? `${myName.name} ${myName.lastName}` : `${userName.name} ${userName.lastName}`
}

interface getAvatarProps {
    myId: string | undefined,
    userId: string | undefined,
    myAvatar: string | undefined,
    userAvatar: string | undefined,
}

export const getAvatar = ({myId, userId, myAvatar, userAvatar}: getAvatarProps): string | undefined => {
    return myId === userId ? myAvatar : userAvatar
}
