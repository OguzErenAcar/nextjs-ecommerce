

import {Button} from "@mui/material"
import React, { MouseEvent } from 'react';

import { useEffect, useState } from "react";
import { useRouter } from "next/router"; 
type question={
    userId:number,
    id:number,
    title:string,
    body:string    
}




export default function Create({questions}:{questions:any}) {
 

    const router =useRouter(); 
    const [questCount, setQuestCount]=useState(0);  

    const [selected,setselect]=useState("");
    useEffect(()=>{
        console.log(questions)
    },[])

    const questElement=()=>{   
        return questions[questCount].body
    }

    const backQuest=()=>{ 
       if((questCount>0)) 
        {setQuestCount(questCount-1)
          setselect("")
        } 
       else setQuestCount(0)
      }
    const nextQuest=()=>{ 
      if(questCount<5) 
        {
          setQuestCount(questCount+1)
          setselect("")  
        } else {router.push("/home")}}
     
    const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault()
    }
 
    return (
    <div>
      <h3>Questions:</h3>
      <span>{questElement()}</span>
      <br></br>
        <form onSubmit={handlesubmit}>
          <label className="block">
          <input type="radio" name="myRadio" checked={selected==="option1"} onChange={()=>setselect("option1")} value="option1" />
          Option 1
        </label >
        <label className="block">
          <input type="radio" name="myRadio" checked={selected==="option2"} onChange={()=>setselect("option2")}  value="option2" />
          Option 2
        </label>
        <label className="block">
          <input type="radio" name="myRadio" checked={selected==="option3"} onChange={()=>setselect("option3")}  value="option3" />
          Option 3
        </label>
      <Button  onClick={backQuest}>back</Button>
      <Button type="submit" onClick={nextQuest} >next</Button>
        </form>
        <div>
          
        </div>
    </div>
  );
}
 


export async function getServerSideProps(){
    console.log("asafsfasasg")
 const req=await fetch('https://jsonplaceholder.typicode.com/posts')
    const questions =await req.json()
    return {props:{questions}}
}
