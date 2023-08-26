import { useCallback, useState } from "react";
import Age from "./Age";
import Salary from "./Salary";
import Button from "./Button";


export default function Callback() {
    const [age,SetAge]=useState(21)
    const [salary,SetSalary]=useState(1000)
    
    const ageup=useCallback(()=>SetAge(age + 1),[age])
    const salaryup=useCallback(()=>SetSalary(salary + 1),[salary])
    return (
      <div className="container text-center">
        <h1>Use CallBack</h1>
        <div className="bg-danger">
            <Age age={age}/>
            <Salary salary={salary}/>
        </div>
        <div className="bg-danger">
            <Button text={"Age Up "} action={ageup}/>
            <Button text={"Salary Up "} action={salaryup}/>
        </div>
      </div>
    )
}
