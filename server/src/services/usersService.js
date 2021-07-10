import stub from './stub';
import { User } from '../schemas';

export default () => {
    return {
        getAllUsers: ()=>{
            return new Promise(async(resolve, reject)=>{
                return User.find({}, (err, users)=>{
                    if(err) reject({status: 500, payload: "Error performing the request."});
                    return resolve({status: 200, payload: users});
                })
            })
        },
        createUser: (user)=>{
            return new Promise(async(resolve, reject)=>{
                return User.create(user, (err, user)=>{
                    if(err) reject({status: 500, payload: "Error performing the request."});
                    return resolve({status: 200, payload: user});
                })
            })
        },
    };
};
