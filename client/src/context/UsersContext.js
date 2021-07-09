import React, {useState} from 'react';
import usersStub from './stub';
import axios from 'axios';
const {API_URL} = process.env;
const UsersContext = React.createContext()
const { Provider: ContextElement } = UsersContext;

const UsersProvider = (props)=>{
    const [users, setUsers] = useState(usersStub);

    const fetchUsers = ()=>{
        return new Promise(async(resolve, reject)=>{
            try{
                const res = await axios.get("http://localhost/api/users");
                setUsers(res.data);
                resolve (res.data);
            }catch(err){
                reject(err);
            }
        })
       
    }

    function createUser(user){
        return new Promise(async(resolve, reject)=>{
            try{
                const res = await axios.post(`http://localhost/api/user`, user);
                debugger
                setUsers([...users, res.data])
                resolve(res.data);
            }catch(err){
                reject(err);
            }
        })

    }

    const state = {
        users,
    }

    const actions = {
        createUser,
        fetchUsers,
    }
    return (
        <ContextElement value={{state, actions}}>
            {props.children}
        </ContextElement>
    );
}


export {
    UsersProvider,
    UsersContext
}