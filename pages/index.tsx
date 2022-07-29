import type { NextPage } from 'next'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import connectMongo from '../lib/mongo/connectDb';
import User from '../models/user.model';
import Feed from './Feed';

const Home: NextPage = () => {
  const { user } = useSelector((state: any)=> state.user);
  
  return (
    <div className="flex min-h-screen ">
      <Feed />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   try {
//     console.log('CONNECTING TO MONGO');
//     await connectMongo();
//     console.log('CONNECTED TO MONGO');

//     console.log('FETCHING DOCUMENTS');
//     const tests = await User.find();
//     console.log('FETCHED DOCUMENTS');

//     return {
//       props: {
//         tests: JSON.parse(JSON.stringify(tests)),
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       notFound: true,
//     };
//   }
// };

export default Home
