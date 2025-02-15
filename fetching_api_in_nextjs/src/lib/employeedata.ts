const url = "https://simple-books-api.glitch.me/books";
export default async function employeesData() {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch.");
  }
  const data = await res.json();
  return data;
}
