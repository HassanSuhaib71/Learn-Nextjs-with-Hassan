const url = "https://simple-books-api.glitch.me/books ";

export default async function booksData() {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fectch data.");
  }
  const data = await res.json();
  return data;
}
