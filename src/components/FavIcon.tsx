import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';

 


const  FavIcon=({className,id}: {  className?: string,id?:string})=> { 
  const [chngColr,setchngClr]=useState(false); 
  return (
    <StarIcon
    onClick={()=>setchngClr(!chngColr)}
    sx={{color:chngColr?"yellow":"white"}} > 
    </StarIcon>
  )
}

export default FavIcon
