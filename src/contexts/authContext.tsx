import { Profile } from '@/models/profileModel'
import React ,{createContext,useContext,useEffect,useState} from 'react'
 

type authContextType={
    profile:Profile|null
    setProfile: React.Dispatch<React.SetStateAction<Profile|null>>
}

const Context =createContext<authContextType|undefined>(undefined)

function AuthContext({children}:{children:React.ReactNode}) {

  

    
    const [profile, setProfile]=useState<Profile | null>(null)
    useEffect(()=>{
        const strogePrfl=localStorage.getItem('Profile')||"{}";
        const prf= JSON.parse(strogePrfl) as Profile
        setProfile(prf)
    },[])



    useEffect(()=>{
        if(profile)
            localStorage.setItem('Profile',JSON.stringify(profile))
        else
            localStorage.removeItem('Profile')

    },[profile])


    const data ={
        profile,
        setProfile
    }

    return   <Context.Provider value={data}>{children}</Context.Provider>  
}

export const useAuth=()=>useContext(Context)
export default AuthContext