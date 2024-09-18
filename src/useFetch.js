import axios from "axios"
import { useEffect } from "react"


export function useFetch(url){
   useEffect(()=>{
      (
         async function(){
            const response = await axios.get(url)
         }
      )()
   },[url])

}