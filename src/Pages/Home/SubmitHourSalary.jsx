

const SubmitHourSalary = () => {
    return (
        <div className="mt-20 mb-20">
           
      {/* Calculator Form */}
      <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center shadow-lg max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Calculate Your Salary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hourly Rate ($)</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. 10.00"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hours/Week</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. 40"
            />
          </div>
          
          
        </div>
        
        <div className="mt-6 flex justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md">
            Calculate Monthly Salary
          </button>
        </div>
      </div>
        </div>
    );
};

export default SubmitHourSalary;