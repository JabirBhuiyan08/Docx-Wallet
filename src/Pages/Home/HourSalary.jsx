import React from "react";

const HourSalary = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      {/* Main Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
          Hourly Salary Calculator
        </h1>
        <p className="text-gray-600 mt-2">Understand your earnings breakdown</p>
      </div>

      {/* Example Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Example Calculation</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Hourly Rate:</span>
            <div className="border-2 border-blue-300 bg-white rounded-xl px-4 py-2 font-bold text-green-600 text-lg">
              $10.00/hr
            </div>
          </div>
          
          <div className="hidden md:block text-blue-500 text-2xl">×</div>
          <div className="block md:hidden text-blue-500 text-xl">↓</div>
          
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Hours Worked:</span>
            <div className="border-2 border-blue-300 bg-white rounded-xl px-4 py-2 font-bold text-blue-600 text-lg">
              160 hrs
            </div>
          </div>
          
          {/* <div className="hidden md:block text-blue-500 text-2xl">=</div> */}
          <div className="block md:hidden text-blue-500 text-xl">↓</div>
        </div>
      </div>


      {/* Monthly Statement Link */}
      <div className="mt-8 text-center">
        <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center justify-center gap-2 mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
          View Monthly Salary Statement
        </button>
      </div>
    </div>
  );
};

export default HourSalary;