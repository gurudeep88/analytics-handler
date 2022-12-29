import mongoose from "mongoose";

    mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log('Connected to database successfully')
        })
        .catch(e => {
            console.log("Can't connect to database", e)
        });
