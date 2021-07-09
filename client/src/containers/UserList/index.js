
import React, { useContext, Fragment, useEffect } from 'react';
import {UsersContext} from '../../context/UsersContext';
import * as styled from './styled';
import {VirtualList} from '../../components';


const UserList = (props)=>{
    const {state, actions} = useContext(UsersContext);
    useEffect(()=>{
        if(!state.users || !state.users.length)
        actions.fetchUsers();
    },[])
    const renderUserRows = ()=>{
        return state.users.map((u, index)=>{
            return (
                <Fragment key={u.email}>
                    <styled.CellFirstName index={index+2}>{u.firstName}</styled.CellFirstName>
                    <styled.CellLastName index={index+2}>{u.lastName}</styled.CellLastName>
                    <styled.CellEmail index={index+2}>{u.email}</styled.CellEmail>
                    <styled.CellDescription index={index+2}>{u.description}</styled.CellDescription>
                    <styled.CellPassword index={index+2}>{u.password}</styled.CellPassword>
                </Fragment>
            )
        })
    }

    const renderUserRow = ({index, style})=>{
        const u = state.users[index];
        return (
            <Fragment key={u.email}>
                <styled.CellFirstName index={index+2}>{u.firstName}</styled.CellFirstName>
                <styled.CellLastName index={index+2}>{u.lastName}</styled.CellLastName>
                <styled.CellEmail index={index+2}>{u.email}</styled.CellEmail>
                <styled.CellDescription index={index+2}>{u.description}</styled.CellDescription>
            </Fragment>
        )
    }

    return (
        <styled.Container rowsCount={state.users.length}>
            <styled.HeaderFirstName>First Name</styled.HeaderFirstName>
            <styled.HeaderLastName>Last Name</styled.HeaderLastName>
            <styled.HeaderEmail>Email</styled.HeaderEmail>
            <styled.HeaderDescription>Description</styled.HeaderDescription>
            <styled.HeaderPassword>Password</styled.HeaderPassword>
            <VirtualList
                windowHeight={400}
                numItems={state.users.length}
                itemHeight={100} // Also supports variable heights (array or function getter)
                renderItem={renderUserRow}
            />
          
           {/* { renderUserRows() } */}
        </styled.Container>
    )
}

export default UserList;