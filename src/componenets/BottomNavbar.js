import React from 'react'
import pddlogo from '../assets/image/pddlogo.png';
import '../assets/css/BottomNavbar.css';
export const BottomNavbar = () => {
    return (
        <>
            <div className="mt-3 ">


                <span >
                    <br />
                    <br />
                    <br />
                    <p className="text text-center AAA   ">

                        <a href="http://www.pdd.ir/" target="_blank" placeholder="طراح داده پیشرو " className="text-bold">
                            <img className="bottomimg h-100 mr-3" src={pddlogo}></img>
                        </a>
                        کلیه حقوق متعلق به شرکت طراح داده پیشرو می باشد
                        <a href="http://www.pdd.ir/" target="_blank" placeholder="طراح داده پیشرو " className="text-bold"> www.pdd.ir   </a>
                    </p>
                </span>





            </div>
        </>
    )
}
