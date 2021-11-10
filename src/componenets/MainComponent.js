import React from 'react'
import { Login } from '../authentication/Login'
import { TopNavBar } from './TopNavBar';
import { Switch, Route, Router } from 'react-router-dom';
import { PageNotFound } from './PageNotFound';
import { Request } from './request/Request';
import { BottomNavbar } from './BottomNavbar';
import { SideBar } from './SideBar';
import { AddOrEditRequest } from './request/AddOrEditRequest';

import { RequestDetail } from './request/RequestDetail';
import { PageTitle } from './PageTitle';

export const MainComponent = () => {
    return (
        <>
            <PageTitle title="لیست درخواست" />

            <div className="wrapper">

            </div>

            <div className="main-panel">
                <TopNavBar />

                <div className="content">

                    <Switch>
                        <Route path="/request-list/" component={Request} />
                        <Route path="/request-list/add-request" component={AddOrEditRequest} />
                        <Route path="/request-detail/:id" exact component={RequestDetail} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>


                </div>

                <nav className="navbar2 fixed-bottom navbar-light footer-font align-items-center align-self-center">
                    <BottomNavbar />
                </nav>


            </div>


        </>
    )
}
