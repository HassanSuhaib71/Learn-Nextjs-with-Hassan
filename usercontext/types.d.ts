
import { Dispatch,SetStateAction } from "react"

interface user  {
    id:number,
    name:string,
    email:string
}

interface MyCustomType {

    user:null | user,
    setuser:Dispatch<SetStateAction<null | user>>
}