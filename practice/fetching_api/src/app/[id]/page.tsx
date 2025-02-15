
export default async function page({params:{id}}:any) {
    const res = await fetch(`https://simple-books-api.glitch.me/books/${id}`)
    if(!res.ok){
        throw new Error("Data could not fetch.")
    }

    const data = await res.json()

  return (
    <div>
        <div>
            <p>id : {data.id}</p>
            <p>Name : {data.name}</p>
            <p>Type : {data.type}</p>
            <p>Price : {data.Price}</p>
            <p>Author : {data.Author}</p>
        </div>
        

    </div>
  )
}
