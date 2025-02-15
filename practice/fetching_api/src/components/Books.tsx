import Link from "next/link";
import Button from "./button";

export default function Books({ id, name, type, available }: Books) {
  return (
    <>
      <div className="w-64 bg-gray-200 p-4 rounded-md shadow-lg flex flex-col justify-between">
        <p>Book id : {id}</p>
        <p>Book Name : {name}</p>
        <p>Book type : {type}</p>
        <p>Book avalibilty : {available}</p>
        <div>
          <Link href= {`/${id}`}>
            <Button buttonText="Details" />
          </Link>
        </div>
      </div>
    </>
  );
}
