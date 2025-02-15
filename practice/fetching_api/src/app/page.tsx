import booksData from "@/lib/booksData";
import Books from "@/components/Books";


export default async function Home() {
  const data = await booksData();
  // console.log(data);

  return (
    <>
      <div className="flex flex-wrap max-w-xl gap-6 items-center justify-center">
        {data.map((book: Books) => {
          return (
            <Books
              key={book.id}
              id={book.id}
              name={book.name}
              type={book.type}
              available={book.available}
            />
            
          );
        })}
        
      </div>
    </>
  );
}
