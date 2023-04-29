const jwt = require('jsonwebtoken');
const JWT_SECRET = "This project is done by $omkar";


const fetchuser = (req,res,next)=>{
    //Get the user from the jwt token and add id to req object
    
    const token = req.header('auth-token');
    if(!token){
        res.stauts(401).send({error : "please authenticate using a valid token"})
    }

    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.stauts(401).send({error : "please authenticare using a valid token"})
    }
}

module.exports = fetchuser;