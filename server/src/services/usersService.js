import stub from './stub';
import { User } from '../schemas';

export default () => {
    return {
        getAllUsers: (pageSize=200, page=0)=>{
            console.log("inside getAllUsers. pageSize= ", pageSize, " page=", page);
            pageSize = Number(pageSize);
            page = Number(page);
            return new Promise(async(resolve, reject)=>{
                return User.find({})
                .limit(pageSize)
                .skip(page*pageSize)
                .sort({email: 'asc'})
                .exec((err, users)=>{
                    if(err){
                        console.log(err);
                        reject({status: 500, payload: "Error performing the request."});
                    } 
                    return resolve({status: 200, payload: {users, page, hasMore: users && users.length >= pageSize}});
                })
                // return User.find({}, (err, users)=>{
                //     if(err) reject({status: 500, payload: "Error performing the request."});
                //     return resolve({status: 200, payload: users});
                // })
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
