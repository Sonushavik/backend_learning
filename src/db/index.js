import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Async function to connect to MongoDB
const connectDB = async () => {
    try {
        // Connect to MongoDB with URI and database name
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_URI}${process.env.DB_NAME}`,
            // {
            //     useNewUrlParser: true,
            //     useUnifiedTopology: true,
            // }
        );
        
        console.log(`MongoDB connected successfully: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);  // Exit the process with failure
    }
};

export default connectDB;
