import React, { useContext } from 'react';
import  { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    //reduce - return the sum of total and item cost
    const totalExpense = expenses.reduce((total, item) => { 
        return (total += item.cost);
    }, 0);

    const alertType = totalExpense > budget ? 'alert-danger' : 'alert-success';
    
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${ budget - totalExpense } </span>
        </div>
    );
};

export default Remaining;