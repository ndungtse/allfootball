import React, { useEffect, useState } from 'react'
import { LinearProgress, Stack } from '@mui/material'

const LinearLoader = () => {
    const [progress, setProgress] = useState<number>(0);

    // useEffect(()=> {
    //     setInterval(()=>{
    //         if(progress<95){
    //             setProgress(progress+0.5)
    //         }
    //         if(progress>=95 &&progress<100){
    //           setProgress(progress+0.001)
    //         }
    //     },100)
    // },[progress])
  return (
    <Stack sx={{ width: '100%', color: '#f75802' , position: 'absolute', top: 0}}>
      {/* <LinearProgress color='inherit' variant='determinate'  value={progress}/> */}
      <LinearProgress color='inherit' variant='indeterminate'  value={progress}/>
    </Stack>
  )
}

export default LinearLoader