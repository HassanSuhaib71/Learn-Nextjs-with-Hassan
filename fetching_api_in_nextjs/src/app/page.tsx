import employeesData from "@/lib/employeedata";
import Employees from "@/components/employee";
import Button from "@/components/button";
import Link from "next/link";
export default async function Home() {
  const data = await employeesData();
  // console.log(data);

  return (
    <>
      <Link href={'/addEmployee'}>
      <Button buttonText="Add Book"/>

      </Link>
      <div className="flex flex-wrap max-w-5xl gap-6 justify-center items-center">
        {data.map((employee: employeeType) => {
          return (
            <Employees
              key={employee.id}
              id={employee.id}
              name={employee.name}
              type={employee.type}
              available={employee.available}
            />
          );
        })}
      </div>
    </>
  );
}
