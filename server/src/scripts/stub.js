import { User } from '../schemas';

export default ()=>{
    User.remove({}, function (err, count){ 
        const arr = [];
        for(let i = 0; i < 500; i++){
            arr.push(   {
                firstName: random(),
                lastName: random(),
                email: makeEmail(),
                description: random(30),
                password: random(30)
            },)
        }
        
        User.insertMany(arr);
    });

}


function makeEmail() { 
    var strValues="abcdefghijklmnopqrstuvwxyz1234567890"; 
    var strEmail = ""; 
    var strTmp; 
    for (var i=0;i<10;i++) { 
    strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
    strEmail = strEmail + strTmp; 
    } 
    strTmp = ""; 
    strEmail = strEmail + "@"; 
    for (var j=0;j<8;j++) { 
    strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
    strEmail = strEmail + strTmp; 
    } 
    strEmail = strEmail + ".com" 
    return strEmail; 
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