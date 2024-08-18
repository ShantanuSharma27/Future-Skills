const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://shansharma2707:buddy123@cluster0.ytot1mv.mongodb.net/help-center", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
