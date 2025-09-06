import jwt from "jsonwebtoken"
const isAuth=async (req,res,next)=>{
    let jwtse = "JHGDSJHKJSD"
    try {
        const token=req.cookies.token
        if(!token){
            return res.status(400).json({message:"token not found"})
        }
        const verifyToken=await jwt.verify(token,jwtse)
        req.userId=verifyToken.userId

        next()

    } catch (error) {
        console.log(error ,"error in iasuth")
        return res.status(500).json({message:"is Auth error"})
    }
}

export default isAuth