import mongoose from "mongoose"

const connectDb=async ()=>{
    try {
        let url = "mongodb+srv://amank27092002_db_user:ajLAkIbaYeiLyC6W@cluster0.hz18cfw.mongodb.net/VirtualAssistant"
        await mongoose.connect(url)
        console.log("db connected")
    } catch (error) {
        console.log("here is the eroor in db,js")
        console.log(error)
    }
}

export default connectDb