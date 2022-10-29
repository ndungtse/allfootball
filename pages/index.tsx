import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import Feed from './Feed';

const Home: NextPage = () => {
  const { user } = useSelector((state: any)=> state.user);
  
  return (
    <div className="flex min-h-screen ">
      <Feed />
    </div>
  )
}

export default Home
