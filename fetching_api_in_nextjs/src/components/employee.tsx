
import Image from "next/image";
import Button from "./button";
import Link from "next/link";


export default function Employees({id,name,type,available} : employeeType) {
  return <>
  <div className="w-64 bg-gray-200 p-4 rounded-md shadow-lg flex flex-col justify-between">
    
    <p>id : {id} </p>
    <p>Book Name : {name} </p>
    <p>type : {type}</p>
    <p>availability : {available}</p>
    <div>
        <Link href={`/${id}`}>
        <Button buttonText="Details"/>
        </Link>
    </div>
  </div>
  
  </>;
}
