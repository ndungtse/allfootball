import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../../lib/mongo/connectDb';
import User from '../../../models/user.model';


export default async function allUsers(req: NextApiRequest, res: NextApiResponse){
    try {
        await connectMongo();
        const user = await User.findOne({ id: req.body});
        res.status(200).json(user);
    } catch (error) {
        res.json(error);
    }
}