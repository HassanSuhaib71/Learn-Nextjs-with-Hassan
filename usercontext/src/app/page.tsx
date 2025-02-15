import Dashboard from "@/components/Dashboard";
import MyProvider from "@/components/MyProvider";
import Test from "@/components/Test";

export default function Home() {
// const user = {
//   id:1,
//   name:"Hassan",
//   email:"hassan@example.com"
// }
  return (
  <div className="flex flex-col items-center justify-between p-6 m-6 ring ring-red-500">
  <h1 className="text-xl font-bold m-2 ">This is Home Page.</h1>
  <MyProvider >
    <Test />
    <Dashboard/>
  </MyProvider>
 </div>
  );
}
