import { useAuth } from '@/contexts/authContext'
import { Button } from '@mui/material'
import React from 'react'


function profile() {

  const auth = useAuth()
  const Logout=()=>{
    auth?.setProfile(null)
  }

  return (
    <div>
      <Button onClick={Logout} sx={{backgroundColor:"red", color:"white"}} >Logout</Button>    
    </div>
  )
}

export default profile
