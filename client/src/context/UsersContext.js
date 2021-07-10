import React, {useState, useEffect} from 'react';
import usersStub from './stub';
import axios from 'axios';
import config from '../config';
const {REACT_APP_API_URL} = config;

const UsersContext = React.createContext()
const { Provider: ContextElement } = UsersContext;

const UsersProvider = (props)=>{
    const [users, setUsers] = useState({
        data: [],
        currPage: 0,
        hasMoreData: false
    });


    useEffect(()=>{
        if(users.hasMoreData){
            fetchUsers(users.currPage);
        }
    },[users]);

    function fetchUsers(page=0, pageSize=200){
        return new Promise(async(resolve, reject)=>{
            try{
                const res = await axios.get(`${REACT_APP_API_URL}/users/${page}/${pageSize}`);
                setUsers({
                    data: [...users.data, ...res.data.users],
                    hasMoreData: res.data.hasMore,
                    currPage: page+1
                });
                resolve (res.data);
            }catch(err){
                reject(err);
            }
        })
       
    }

    function createUser(user){
        return new Promise(async(resolve, reject)=>{
            try{
                const res = await axios.post(`${REACT_APP_API_URL}/user`, user);
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