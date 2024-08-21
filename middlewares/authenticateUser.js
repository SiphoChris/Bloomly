import 'dotenv/config'
import jwt from 'jsonwebtoken'
// const {verify, sign} = jwt
const {sign} = jwt

function createToken(user){
    return sign(
        {
            emailAdd: user.emailAdd,
            userPass: user.userPass
        },
        process.env.SECRET_KEY,
        {
            expiresIn: '3hr'
        }
    )
}

// function verifyToken(req, res, next){
//     const token = req?.headers["authorization"]
//     if(token){
//         if(verify(token, process.env.SECRETE_KEY)){
//             next()
//         }else{
//             res.json({
//                 status: res.statusCode,
//                 msg: 'Please provide the correct credentials'
//             })
//         }
//     }else{
//         res.json({
//             status: res.statusCode,
//             msg: 'Log in first'
//         })
//     }
// }

// export {createToken, verifyToken}
export {createToken}