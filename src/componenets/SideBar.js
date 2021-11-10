import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const SideBar = () => {

    const USER = JSON.parse(localStorage.getItem('user'));

    return (
        <>

            <ul class="nav nav-tabs" id="sidbar-nav">
                <li class="nav-item">
                    <NavLink exact activeClassName="active" className="nav-link text-dark " to="/request-list/add-request">
                        <i className="nc-icon nc-bank"></i>
                        درخواست جدید
                    </NavLink>
                </li>


                <li class="nav-item">
                    <NavLink exact activeClassName="active" className="nav-link logo-normal text-dark" /*to="/request-list/info"*/ to='/request-list/'>
                        <i className="nc-icon nc-bank"></i>
                        لیست اطلاعات
                    </NavLink>
                </li>

            </ul>
        </>
    )
}
