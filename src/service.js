import axios from 'axios'

const BASE = 'https://coetus.herokuapp.com/api/forum'
const FORUM = {
    users: '/users',
    messages: '/message',
    topics: '/topics'
}


export const getAllMessages = () => axios.get(`${BASE}${FORUM.messages}`) 
export const getUserById=(id) => axios.get(`${BASE}${FORUM.users}/${id}`)
export const registerUser = (user) => axios.put(`${BASE}${FORUM.users}`,user)
export const logInUser = (username,password) => axios.post(`${BASE}${FORUM.users}`,{username,password})
export const addMessage = (username,topic_id,message) => axios.put(`${BASE}${FORUM.messages}/`,{username,topic_id,message})
export const getAllTopics = () => axios.get(`${BASE}${FORUM.topics}`) 