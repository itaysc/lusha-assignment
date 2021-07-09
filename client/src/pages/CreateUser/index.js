import {CreateUser} from '../../containers';
import {UsersProvider} from '../../context/UsersContext';
import { ToastProvider } from 'react-toast-notifications';
const CreateUserPage = (props)=>{
    return (
        <UsersProvider>
            <ToastProvider>
                <CreateUser {...props}/>
            </ToastProvider>
        </UsersProvider>
    )
}

export default CreateUserPage;