import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../lib/mongo/connectDb";
import User from "../../../models/user.model";

export default async function addTest(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const user = await User.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ messge: 'user created succesfully', data: user });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}