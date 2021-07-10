
import React, { useContext, Fragment, useEffect } from 'react';
import {UsersContext} from '../../context/UsersContext';
import * as styled from './styled';
import VirtualList from 'react-tiny-virtual-list';


const UserList = (props)=>{
    const {state, actions} = useContext(UsersContext);
    useEffect(()=>{
        if(!state.users || !state.users.length)
        actions.fetchUsers();
    },[])


    const renderUserRow = ({index, style})=>{
        const u = state.users[index];
        return (
            <styled.Row key={u.email} style={style} className="user-row">
                <styled.RowItem className="firstName">{u.firstName}</styled.RowItem>
                <styled.RowItem className="lastName">{u.lastName}</styled.RowItem>
                <styled.RowItem className="email">{u.email}</styled.RowItem>
                <styled.RowItem className="description">{u.description}</styled.RowItem>
                <styled.RowItem className="password">{u.password}</styled.RowItem>
            </styled.Row>
        )
    }

    return (
        <>
            <styled.Row>
                <styled.RowItem>First Name</styled.RowItem>
                <styled.RowItem>Last Name</styled.RowItem>
                <styled.RowItem>Email</styled.RowItem>
                <styled.RowItem>Description</styled.RowItem>
                <styled.RowItem>Password</styled.RowItem>
            </styled.Row>
            <div style={{height:'600px', overflowY: 'scroll'}}>
                <VirtualList
                    width='100%'
                    height={500}
                    itemCount={state.users.length}
                    itemSize={60} // Also supports variable heights (array or function getter)
                    renderItem={renderUserRow}
                />
            </div>
      
       
          
           {/* { renderUserRows() } */}
        </>
    )
}

export default UserList;