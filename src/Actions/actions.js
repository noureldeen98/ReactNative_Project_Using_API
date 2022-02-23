const baseURL = 'https://jsonplaceholder.typicode.com/users';
import axios from "axios";
const list = [
    {
        id:1,
        name:'Nour-Eldeen',
        email:'day3@lab3.com'
    },
    {
        id:2,
        name:'Nasser',
        email:'day3@lab3.com'
    },
    
]

export const  getUsers = async ()=>{
    let users = []
    try {
        const response = await axios.get(baseURL)
        users = response.data;
    } catch (error) {
        console.log(error)
    }
    console.log('after resolve')
    return {
        type:'USERS_LIST',
        payload:users 
    }

}

export const getUserDetails = async (id)=>{
    let user = {}
    try {
        const response = await axios.get(`${baseURL}/${id}`)
        user = response.data;
    } catch (error) {
        console.log(error)
    }
    console.log('after resolve')
    return {
        type:'USERS_DETAILS',
        payload:user 
    }
}

export const clearDetails = ()=>{
    return {
        type:'CLEAR_DETAILS'
    }
}

