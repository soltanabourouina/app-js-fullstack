const mongoose = require ("mongoose");

const connectDB = async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo connecté");
    } catch (error) {
        console.log(error);
        process.exit();
    }
};
module.exports = connectDB;