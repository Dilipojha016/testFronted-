import { toast } from "react-toastify";
export const getUser = () =>{
    const userStr= localStorage.getItem('user');
    if(userStr){
        return JSON.parse(userStr)
    }
} 
export const getToken = () =>{
    return localStorage.getItem('token') || '';
} 

export const setUserToken = (token, user) =>{
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
} 

export const removeUserSession  = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.clear()
}

export const checkError = (response)=>{
    if(response && response.data && response.data.statusCode===401){
        removeUserSession()
        alert(response.data.message);
        setTimeout(()=>{
            window.location = '/login'
        },1000)
    }else{
        toast.error(response.data.message)
    }
    
}