import Employees from "@/components/employee";

export default async function page({ params: { id } }: any) {
  const res = await fetch(`https://simple-books-api.glitch.me/books/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }
  const data = await res.json();
  // console.log(data);

  return (
    <>
    <div className="flex justify-center items-center h-screen">
    <div className="flex flex-col p-4 shadow-lg rounded-lg space-y-3 bg-gray-200   ">
      <p>id : {data.id}</p>
      <p>Name : {data.name}</p>
      <p>Type : {data.type}</p>
      <p>Author : {data.author}</p>
      <p>isbn : {data.isbn}</p>
      <p>Price : {data.Price}</p>
    </div>
    </div>
    </>
  );
}
