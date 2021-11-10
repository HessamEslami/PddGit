import React, { useRef, useEffect } from 'react';
import './Login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import { SaveUser } from './SaveUser';
import { getAllDrug } from '../componenets/services/LoadDrugService';
import Swal from 'sweetalert2';
import PddLogoNew from '../assets/image/PddLogoNew.ico';
import TehranSetorz from '../assets/image/TehranSetorz.png';
import { PageTitle } from '../componenets/PageTitle';


export const Login = () => {

    const history = useHistory();
    const userNameRef = useRef();
    const paswordRef = useRef();
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [userName, setUsername] = React.useState('');
    const [isLoading, setIsloading] = React.useState(false);


    const [drugs, setDrugs] = React.useState([]);


    //==================   مهندس حقانی   ================
    useEffect(async () => {
        if (user != '') {
            if (user.length != 0) {
                console.log(user);
                console.log('Hessam');
                console.log(`/request-list/${user[0].ShopId}`)
                localStorage.setItem('user', JSON.stringify(user));
                //history.push(`/request-list/${user[0].ShopId}`);
                history.push(`/request-list/`);
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'توجه',
                    text: 'نام کاربری و کلمه عبور را صحیح وارد کنید .',
                })
            }
        }
    }, [user])


    const SaveUser = async () => {
        setIsloading(true);
        //const apiUrl = 'http://localhost:8085/api/pdd/TSLoginValidate?username=' + userName + '&password=' + password;
        const apiUrl = window.BASE_URL + '/TSLoginValidate?username=' + userName + '&password=' + password;

        fetch(apiUrl)
            .then(response => response.json())
            .then((data) => {
                setUser(data);
            },
                (error) => {
                    alert('error in registration');
                })

        setIsloading(false);
    }




    //==================   قدیم خودم   ================
    /*const SaveUser = () => {

        console.log(userNameRef.current.value);
        if (userNameRef.current.value == '551' && paswordRef.current.value == '12345') {
            const user = {
                ShopId: '551',
                ShopName: 'دانشکده داروسازي تهران',

            }
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('drugs', JSON.stringify(drugs));
            console.log('AAA');
            console.log(history);
            history.push(`/request-list/info?${user.ShopId}`);
        }
        else {
            alert('نام کاربری یا کلمه عبور به درستی وارد نشده است .');
        }
    }

*/
    return (
        <>
            <PageTitle title="پرتال نمایندگان تهران ستورز" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" />
            <div className="container">
                <div className="card card-login mx-auto text-center bg-dark ">

                    <div className="card-header mx-auto bg-dark ">
                        <span> <img src={PddLogoNew} className="w-25" alt="Logo" /> </span>
                        <br />
                        <br />
                        <p className="text text-white">به پرتال درخواست نمایندگان <i className="i-1">تهران ستورز</i> خوش آمدید .</p>
                        <br />
                        <span className="logo_title mt-5"> ورود كاربران </span>
                    </div>


                    <div className="card-body">
                        <form action="" >

                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input ref={userNameRef} type="text" className="form-control" placeholder="نام كاربري" onChange={event => setUsername(event.target.value)} />
                            </div>


                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input ref={paswordRef} type="password" className="form-control" placeholder="كلمه عبور" onChange={event => setPassword(event.target.value)} />
                            </div>


                            <br />

                            <div className="form-group">

                                <button type="button" className="btn btn-outline-danger float-right login_btn" onClick={() => SaveUser()}
                                    /*onClick={ () => saveUser22(userName,password) } */
                                    disabled={isLoading ? 'disabled' : ''}>
                                    ورود

                                </button>
                            </div>

                        </form>

                    </div>

                    <a className="text text-info" href="http://www.pdd.ir/" target="_blank" alt="طراح داده پیشرو">www.pdd.ir</a>

                </div>
            </div>
        </>
    )
}
