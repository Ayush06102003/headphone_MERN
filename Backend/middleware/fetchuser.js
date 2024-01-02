const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Ayush@123';

const fetchuser = (req,res,next)=>{
    const token = req.header('auth-token')
    if(!token){
        res.status(400).send({ error : 'Please authenticate using valid token'});
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(400).send({ error : 'Please authenticate using valid token'});
        
    }
}

module.exports = fetchuser;