import mongoose from 'mongoose';

const MONGO_URI: any = process.env.MONGODB_URL

const connectMongo = async () => mongoose.connect(MONGO_URI);

export default connectMongo;