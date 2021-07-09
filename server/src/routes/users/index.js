import userRoutes from './userRoutes';
import usersService from '../../services/usersService';

export default (app, middlewares)=>{
    try{
        userRoutes(app, usersService(), middlewares);
    }catch(err){
        console.log(err)
    }
}