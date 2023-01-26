const mongoose =require('mongoose');
const connectDatabase=async()=>{
    try {
        const connection=await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database connected to : ${connection.connection.host}`); 
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports=connectDatabase;