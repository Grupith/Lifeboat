import React from 'react';
import Welcome from './Welcome';
import Expenses from './Expenses';

const View = ({ totalBills }) => {
    return (
        <div className='view'>
            <Welcome />
            {totalBills.length === 0 ? <div /> : <h2 className='bills'>Monthly Bills Left</h2>}
            {totalBills.map(bill => <Expenses key={bill.name} name={bill.name} amount={bill.amount} date={bill.date} />)}
        </div>
    )
}

export default View;
