import {UserList} from '../../containers';
import {UsersProvider} from '../../context/UsersContext';

const UserListPage = (props)=>{
    return (
        <UsersProvider>
             <UserList {...props}/>
        </UsersProvider>
    )
}

export default UserListPage;