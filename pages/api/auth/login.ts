import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../../lib/mongo/connectDb';
import User from '../../../models/user.model';


export default async function login(req: NextApiRequest, res: NextApiResponse){
    try {
        await connectMongo();
        const validEmail = await User.findOne({ email: req.body.email});
        if(!validEmail) return res.status(400).json({ message: "email not found"})

        const validPassword = await User.findOne({ password: req.body.password});
        if(!validPassword) return res.status(400).json({ message: "invalid password"})
        res.status(200).json({ message: "looged in"});
    } catch (error) {
        res.json(error)
    }
}