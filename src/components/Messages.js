import Message from "./Message.js"

const Messages = (messages,me)=> messages.map(message => Message(message,me))

export default Messages