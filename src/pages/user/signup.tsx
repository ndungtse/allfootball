import { Button, colors, TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useApp } from '../../components/constants/contexts/AppContext'
// import { makeStyles } from "@material-ui/core/styles";

const fieldBef ={
  '& fieldset': {
    borderColor: colors.orange[900],
  }}

  console.log(fieldBef);
  

const Signup = () => {
    const {themeClass} = useApp()
    
  return (
    <div className={` ${themeClass.bg} ${themeClass.text} h-screen overflow-hidden w-full`}>
        {/* <Image className='max-w-full max-h-full opacity-30 pointer-events-none' 
        src="/cthing.jpg" alt="" height={1080} width={1920} /> */}
        <div className={`last:absolute p-3 max-w-[500px] w-1/2 px-2 min-w-[280px] ${themeClass.bgAlt} top-1/2
         left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl`}>
          <form className="flex flex-col items-center">
            <Image className='cursor-pointe' src="/logo.png" alt="" width={80} height={26}/>
            <p className='mt-4'>Signup for better experiance</p>
            <div className={`mt-4 ${themeClass.text} w-4/5 min-w-[270px] flex flex-col`}>

              <TextField label="username" color='warning' required
                sx={{ width: '100%', '& .MuiOutlinedInput-root': fieldBef}} size="small" type={'text'} />

              <TextField label="email" type={'email'} color='warning' 
                sx={{ width: '100%', marginTop: 3, color: 'white', 
                '& .MuiOutlinedInput-root': fieldBef}} size="small" required />

              <TextField label="password" type={'password'} color='warning' required
                sx={{ width: '100%', marginTop: 4, '& .MuiOutlinedInput-root': fieldBef,
                 borderColor: colors.orange[900] }} size="small" />
              <Button
              sx={{ width: 100, marginX: 'auto', color: 'white', marginTop: 4,
                backgroundColor: colors.orange[900], ":hover": { backgroundColor: colors.orange[800] } }}>Signup</Button>  
            </div>
          </form>
        </div>
    </div>
  )
}

export default Signup