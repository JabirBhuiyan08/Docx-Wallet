import React from 'react';
import Header from './Header';
import HourSalary from './HourSalary';
import SubmitHourSalary from './SubmitHourSalary';
import AddNote from './AddNote';

const Home = () => {
    return (
        <div className=''>
            <Header />
            <HourSalary />
            <SubmitHourSalary />
            <AddNote />
        </div>
    );
};

export default Home;