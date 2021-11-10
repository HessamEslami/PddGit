import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';


export const SaveUser = ({ UserName, PassWord }) => {

    const apiUrl = `http://localhost:8085/api/pdd/TSLoginValidate?username=${UserName}&password=${PassWord}`;
    const [user, setUser] = React.useState([]);
    const history = useHistory();

    console.log('Salam Hessam');
    console.log(history);

    useEffect(async () => {
        const result = await getUser();
        setUser(result);
    }, [])

    const getUser = async () => {

        const Response = await fetch(apiUrl);
        const result = Response.json();
        return result;
    }

    history.push('/');

    if (UserName == 'H.Eslami' && PassWord == '123') {
        const user = {
            useid: '1',
            userName: 'H.Eslami',
            fullName: 'حسام اسلامی',

        }
        localStorage.setItem('user', JSON.stringify(user));
        console.log(history);
        history.push('/');
    }
    else {
        alert('نام کاربری یا کلمه عبور به درستی وارد نشده است .');
    }


    return (
        <>



        </>
    )
}
