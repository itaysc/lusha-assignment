export default (res, err)=>{
    return res.status(err.status? err.status: 500)
    .send({ error: { msg: err.payload? err.payload: "חלה שגיאה בביצוע הבקשה.", 
    code: err.code?err.code: null } });
}