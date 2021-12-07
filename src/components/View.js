import React from 'react';
import CreateBudget from './CreateBudget';
import Expenses from './Expenses';

const View = () => {
    return (
        <div className='view'>
            <CreateBudget />
            <h2 className='bills'>Monthly Bills</h2>
            <Expenses />
        </div>
    )
}

export default View;
