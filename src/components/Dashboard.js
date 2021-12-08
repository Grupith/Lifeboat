import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import View from '../components/View';
import AddBill from '../components/AddBill';

const Dashboard = () => {

    const [addBillBtn, setAddBillBtn] = useState(false);
    
    const [totalBills, setTotalBills] = useState([]);
    const [totalBillsAmount, setTotalBillsAmount] = useState();

    // Filter the price from each bill in the totalBills array
    const filteredAmount = totalBills.map((bill) => {
        return Number(bill.amount);
    })
    // Sum the all the amounts together
    const sum = filteredAmount.reduce((a, b) => {
        return a + b;
    }, 0);
    
    useEffect(() => {
        setTotalBillsAmount(sum);
    }, [sum]);

    return (
        <div className='dashboard'>
            <Nav setAddBillBtn={setAddBillBtn} totalBillsAmount={totalBillsAmount} />
            {!addBillBtn ? <View totalBills={totalBills} /> : <AddBill totalBills={totalBills} setTotalBills={setTotalBills} setAddBillBtn={setAddBillBtn}/>}
        </div>
    )
}

export default Dashboard;
