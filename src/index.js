import { addMessage, getAllMessages, getAllTopics, logInUser, registerUser } from "./service";
import Messages from "./components/Messages.js"
import {chatContent,imgAvatar,inputUsername,inputPass,btnLogIn,btnSignUp,aLogIn,aSignUp,formLogIn,formSignUp,inputName,inputSurname,inputNewUsername,inputNewPassword,inputEmail,aSend,inputMessageText } from "./constants.js"

let messages = []
let user


aLogIn.addEventListener('click', () => {
    aLogIn.classList.add('active')
    aSignUp.classList.remove('active')
    formLogIn.classList.add('show', 'active')
    formSignUp.classList.remove('show', 'active')
})
aSignUp.addEventListener('click', () => {
    aLogIn.classList.remove('active')
    aSignUp.classList.add('active')
    formLogIn.classList.remove('show', 'active')
    formSignUp.classList.add('show', 'active')
})


btnLogIn.addEventListener('click', () => {
    logInUser(inputUsername.value, inputPass.value)
        .then(res => {
            user = res.data.user
            console.log(user);
            //imgAvatar.src = user.picture

            getAllMessages().then(res => {
                messages = res.data.data
                console.log(messages)

                chatContent.innerHTML = ''
                chatContent.append(...Messages(messages, user))

                getAllTopics().then(res => {
                    aSend.addEventListener('click', () => {
                        let topic_id = res.data.topics[0].topic_id
                        

                        addMessage(user.username, topic_id, inputMessageText.value).then(res => {
                            getAllMessages().then(res => {
                                messages = res.data.data
                                chatContent.innerHTML = ''
                                chatContent.append(...Messages(messages, user))
                            })
                            inputMessageText.value = ''
                        })
                    })
                })
            })
        })
        .catch(res => {
            console.log('Neuspesno logovanje');
        })
})

btnSignUp.addEventListener('click', () => {
    let user = {
        name: inputName.value,
        surname: inputSurname.value,
        username: inputNewUsername.value,
        email: inputEmail.value,
        password: inputNewPassword.value
    }
    registerUser(user).then(res=>{
        console.log(res);
    })
})


