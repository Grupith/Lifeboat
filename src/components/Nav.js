import React from 'react';
import { FaPlusSquare } from "react-icons/fa";


const Nav = ({ setAddBillBtn, totalBillsAmount }) => {

    const handleAddBillBtn = () => {
        setAddBillBtn(prevClick => !prevClick);
    }

    return (
        <nav className='nav'>
            <h1 className='logo'>Lifeboat <span>Finance</span></h1>
                <ul>
                    <li>Dashboard</li>
                    <li>Logout</li>
                </ul>
            
            <div className='monthlyBudgetWrapper'>
                <p className='monthlyBudgetText'>Total Bills</p>
                <span className='monthlyBudgetAmount'>${totalBillsAmount}</span>
            </div>

            <div className='navButtonWrapper' onClick={handleAddBillBtn}>
                <FaPlusSquare />
                <span className='navButtonText'>Add Bill</span>
            </div>
        </nav>
    )
}

export default Nav;
