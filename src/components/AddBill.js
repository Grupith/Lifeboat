import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaBookmark, FaMoneyCheckAlt, FaCalendarAlt } from "react-icons/fa";

const AddBill = ({ totalBills, setTotalBills, setAddBillBtn }) => {

    const [name, setName] = useState();
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newBill = {
            id: uuidv4(),
            name: name,
            amount: amount,
            date: date
        }
        setTotalBills([...totalBills].concat(newBill));
        setAddBillBtn(false);
        setName('');
        setAmount('');
        setDate('');

    }

    return (
        <div className='addBillContainer'>
            <div className='addBillTitle'>
                <h2>Add a <span className='addBillViewTitleSpan'>monthly</span> bill</h2>
            </div>
            <form onSubmit={handleSubmit} className='addBillFormContainer'>
                <div className='addBillFormWrapper'>
                    <FaBookmark />
                    <label htmlFor='billName'>Name</label>
                    <input onChange={e => setName(e.target.value)} autoComplete='off' type='text' name='billName' />
                </div>
                <div className='addBillFormWrapper'>
                    <FaMoneyCheckAlt />
                    <label htmlFor='billAmount'>Amount</label>
                    <input onChange={e => setAmount(e.target.value)} autoComplete='off' type='text' name='billAmount' />
                </div>
                <div className='addBillFormWrapper'>
                    <FaCalendarAlt />
                    <label htmlFor='billDate'>Due Date</label>
                    <input onChange={e => setDate(e.target.value)} autoComplete='off' type='text' name='billDate' />
                </div>
                <button type='submit' className='addBillFormBtn'>Add</button>
            </form>
        </div>
    )
}

export default AddBill;
