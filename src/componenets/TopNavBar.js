import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png';
import pddlogo from '../assets/image/pddlogo.png';
import PddLogoNew from '../assets/image/PddLogoNew.ico'
import TehranSetorz from '../assets/image/TehranSetorz.png';
import { FaProductHunt, FaHome, FaDoorOpen } from 'react-icons/fa'


export const TopNavBar = () => {

    const location = useLocation();

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    return (
        <>


            <div className="TopNavbar-logo">
                <div className="nav bg-primary  pt-1 pb-2">
                    <div className="container">
                        <div className="row">

                            <div className="col-1 pl-0 pr-0 mb-1" >
                                <a href="http://www.pdd.ir/" target="_blank" placeholder="طراح داده پیشرو">
                                    <img className="TopNavbarimg-logo w-5 ml-50" src={PddLogoNew} alt="Logo" /></a>
                            </div>

                            <div className="col-6 pl-0 pr-0 pt-2">
                                <p className="text text-white">سامانه ثبت درخواست نمایندگان (1.0.0.1)</p>
                            </div>

                            <div className="col-5 pl-0 pr-0 pt-2 ">
                                <p className="txt text-white">  كاربر جاري : {user != null ? user[0].ShopName : ""}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="TopNavbar-h">
                <div className="row">
                    <div className="col col-md-6 pl-0 pr-0 mb-1">
                        <h2 className="TopNavbar-h2">پرتال درخواست نمایندگان</h2>
                    </div>

                    <div className="col col-md-5 pl-0 pr-0 mb-1">
                        <a href="https://www.tehransutures.com/" target="_blank" placeholder="تهران ستورز">
                            <h6 className="TopNavbar-h6">
                                <img className="w-50 img-logo" src={TehranSetorz} alt="image" />
                            </h6> </a>

                    </div>

                </div>

            </div>

            <div className="TopNavbar-h3">

                <NavLink className="Link1" to={'/'}>
                    <FaDoorOpen size='30px' />
                </NavLink>

                <NavLink className="Link2" to={'/request-list/'} >
                    <FaHome size='30px' />
                </NavLink>

                <a href="http://www.pdd.ir/" target="_blank" placeholder="طراح داده پیشرو" className="Link2" alt="asas">
                    <FaProductHunt size='30px' />
                </a>


            </div>



        </>
    )
}
