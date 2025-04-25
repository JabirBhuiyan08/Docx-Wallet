

const SubmitHourSalary = () => {
    return (
        <div className="mt-20 mb-20">
            <div className="flex flex-col lg:flex-row gap-4 justify-center mt-10">
                
                <input type="Number" placeholder='Date' className='border border-black
                 p-2 rounded-2xl '/>
                <input type="Number" placeholder='Hour' className='border border-black
                 p-2 rounded-2xl '/>
           
            <button className="bg-blue-800 text-white px-4 py-2 
            rounded-4xl">Submit</button>
            </div>
        </div>
    );
};

export default SubmitHourSalary;