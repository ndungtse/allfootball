import React from 'react'
import MainLayout from '../../components/layouts/MainLayout'

const League = () => {
  const [league, setLeague] = React.useState(null)
  const [linear, setLinear] = React.useState(false)
  
  return (
    <MainLayout title='' setLinear={setLinear}>

    </MainLayout>
  )
}

export default League