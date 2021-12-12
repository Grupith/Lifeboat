import React from 'react';
import { FaDumpster, FaEdit } from 'react-icons/fa';

const Expenses = ({ id, name, amount, date, totalBills, setTotalBills}) => {

    const handleDelete = () => {
        const newBills = totalBills.filter((bill) => {
            return bill.id !== id;
        })
        setTotalBills(newBills);
    }

    return (
        <div className='expensesChart'>
            <div className='expensesChartIconWrapper'>
                <FaDumpster onClick={handleDelete} className='expensesDeleteIcon' />
                <FaEdit className='expensesEditIcon'/>
                <p className='expensesTitle'>{name}</p> 
            </div>
            <span className='expensesPrice'>${amount}</span>
            <p className='expensesDate'>{date}</p>
        </div>
    )
}

export default Expenses;
