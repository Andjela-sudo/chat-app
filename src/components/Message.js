import { getUserById } from "../service";

const Message = (message,me) =>{
    let date = new Date (message.timestamp)

    const divMessage = document.createElement('div')
 
    console.log('id usera za poruku');
    console.log(message.user_id);

    getUserById(message.user_id).then(res=>{
        let user = res.data.user
        let isMe = user.user_id == me.user_id
   
       divMessage.className = 'media media-chat' + ( isMe? ' media-chat-reverse': '')
       divMessage.innerHTML = `
       ${isMe?'':'<img class="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="...">'}
       <div class="media-body">
           <p>${message.message}</p>
           <p class="meta"><span>${user.username}</span><time datetime="${date.getFullYear()}">${date.getHours()}:${date.getMinutes()} -- ${date.getFullYear()}</time></p>
       </div>
       `
    })
    
    return divMessage
}

export default Message