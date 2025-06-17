

import {Button} from "@mui/material"

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

    useEffect(()=>{
        console.log(questions)
    },[])

    const questElement=()=>{   
        return questions[questCount].body
    }

    const backQuest=()=>{ questCount>0 ? setQuestCount(questCount-1) :setQuestCount(0)}
    const nextQuest=()=>{ questCount<5?setQuestCount(questCount+1):router.push("/home")}
  return (
    <div>
      <h3>Questions:</h3>
      <span>{questElement()}</span>
      <br></br>
        <div>
           <label className="block"><input type="radio"/>A</label>  
           <label className="block"><input type="radio"/>B</label>  
           <label className="block"><input type="radio"/>C</label>  
        </div>
      <Button onClick={backQuest}>back</Button>
      <Button onClick={nextQuest} >next</Button>
    </div>
  );
}


export async function getServerSideProps(){
    console.log("asafsfasasg")
 const req=await fetch('https://jsonplaceholder.typicode.com/posts')
    const questions =await req.json()
    return {props:{questions}}
}
