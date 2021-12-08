import React, { useState } from 'react';
import Nav from '../components/Nav';
import View from '../components/View';
import AddBill from '../components/AddBill';

const Dashboard = () => {

    const [addBillBtn, setAddBillBtn] = useState(false);
    
    const [totalBills, setTotalBills] = useState([]);
    const [totalBillsAmount, setTotalBillsAmount] = useState();

    totalBills.map(billAmnt => setTotalBillsAmount(billAmnt.amount))

    return (
        <div className='dashboard'>
            <Nav setAddBillBtn={setAddBillBtn} totalBillsAmount={totalBillsAmount} />
            {!addBillBtn ? <View totalBills={totalBills} /> : <AddBill totalBills={totalBills} setTotalBills={setTotalBills} setAddBillBtn={setAddBillBtn}/>}
        </div>
    )
}

export default Dashboard;
