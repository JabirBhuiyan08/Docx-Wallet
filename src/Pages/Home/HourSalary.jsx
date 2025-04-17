import React from "react";

const HourSalary = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center ">
      <div className="flex flex-col gap-4 justify-center items-center mt-10">
        <div className="text-3xl font-bold">
          <h1>Hour $ Salary -</h1>
        </div>
        <div className="flex gap-4 items-center">
            <h1 className="font-bold ">Example: </h1>
            <h1 className="font-bold ">Hourly Rate:</h1>
            <h1 className="border-4 border-black rounded-2xl p-2 font-bold text-green-500">10.00 hr</h1>
            <h1 className="font-bold">Salary:</h1>
            <h1 className="border-4 border-black rounded-2xl p-2 font-bold text-green-500">10.00 $</h1>

        </div>
      </div>
       <h1 className='font-bold text-blue-600'>Montly salary Statement</h1>
    </div>
  );
};

export default HourSalary;
