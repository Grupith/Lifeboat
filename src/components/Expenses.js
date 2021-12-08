import React from 'react';

const Expenses = ({ name, amount, date}) => {
    return (
        <div className='expensesChart'>
            <p className='expensesTitle'>{name}</p>
            <span className='expensesPrice'>${amount}</span>
            <p className='expensesDate'>{date}</p>
        </div>
    )
}

export default Expenses;
