import { User } from '../schemas';
import faker from 'faker';

export default ()=>{
    User.remove({}, function (err){ 
        const arr = [];
        for(let i = 0; i < 500; i++){
            arr.push(   {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                description: random(30),
                password: random(30)
            },)
        }
        
        User.insertMany(arr);
    });

}


    function random(length= 4) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }