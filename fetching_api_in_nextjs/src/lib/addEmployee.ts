export async function addEmployee({book_id,name,type}:{book_id:string,name:string,type:string}){

    const newEmployee = {
        id : book_id,
        name : name,
        type : type,
    }

    const res = await fetch(`https://simple-books-api.glitch.me/api-clients`,{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(newEmployee)
    })

    const {status,data} = await res.json()
    return alert(`Status:${status} id:${book_id} Name:${data.name} Type:${data.type} updated successfully `)
    

}