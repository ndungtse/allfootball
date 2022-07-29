import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../../lib/mongo/connectDb';
import User from '../../../models/user.model';


export default async function allUsers(req: NextApiRequest, res: NextApiResponse){
    try {
        await connectMongo();
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.json(error);
    }
}