import React from 'react';
import { FaPlusSquare } from "react-icons/fa";


const Nav = () => {
    return (
        <nav className='nav'>
            <h1 className='logo'>Lifeboat <span>Finance</span></h1>
                <ul>
                    <li>Dashboard</li>
                    <li>Logout</li>
                </ul>
            
            <div className='monthlyBudgetWrapper'>
                <p className='monthlyBudgetText'>Total Bills</p>
                <span className='monthlyBudgetAmount'>$356.63</span>
            </div>

            <div className='navButtonWrapper'>
                <FaPlusSquare />
                <span className='navButtonText'>Add Bill</span>
            </div>
        </nav>
    )
}

export default Nav;
