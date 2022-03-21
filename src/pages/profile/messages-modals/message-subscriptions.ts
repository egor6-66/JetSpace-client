import {MESSAGE_SUB} from "../../../GRAPHQL/subscriptions/message-subscriptions";


const messageSubscriptions = (subscribeToMore :any, refetch: any) => {
    subscribeToMore({
        document: MESSAGE_SUB,
        updateQuery: (prev: any, {subscriptionData, variables}: any): any => {
            const newMessage = subscriptionData.data.newMessage
            if (!prev?.getMessages) {
                //"refetch" должен отработать один раз, только при первом сообщении! когда еще нету "prev"
                refetch()
            } else {
                const prevData = prev?.getMessages
                const updateMessages = Object.assign({}, prevData, {messages: [...prevData?.messages, newMessage]})
                return {getMessages: updateMessages}
            }
        }
    })
}

export default messageSubscriptions;
