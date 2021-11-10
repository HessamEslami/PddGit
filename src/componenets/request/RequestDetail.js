import React, { useEffect } from 'react'
import { PageTitle } from '../PageTitle';
import { TopNavBar } from '../TopNavBar';
import { BottomNavbar } from '../BottomNavbar';
import { useParams } from 'react-router';

export const RequestDetail = () => {

    const { id } = useParams();
    const [detail, setDetail] = React.useState([]);


    //const apiUrl = `http://localhost:8085/api/pdd/TSLoadRequestsDetail?DocumentID=${id}`;
    const apiUrl = window.BASE_URL + `/TSLoadRequestsDetail?DocumentID=${id}`

    useEffect(async () => {
        const result = await getRequestDetal();
        setDetail(result);

        console.log('Hellloooooooooooo');
        console.log(result);
    }, [])


    const getRequestDetal = async () => {
        const Response = await fetch(apiUrl);
        const result = Response.json();
        return result;
    }


    return (
        <>
            <PageTitle title="جزئیات درخواست" />
            <div className="wrapper">

            </div>

            <div className="main-panel">
                <TopNavBar />

                <div className="content">
                    <span id="sidbar-nav">
                        <br />
                        <br />
                    </span>


                    <div className="card container" >

                        <div className="card-header ch2">
                            <span className="form-title">
                                جرئیات درخواست سریال {id}
                            </span>
                        </div>

                        <div className="card-body">
                            <div className="row">


                                <div className="col">
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th className="with-1">کد سند</th>
                                                <th className="with-1">کد کالا</th>
                                                <th>نام کالا</th>
                                                <th className="with-2">تعداد درخواست</th>
                                                <th className="with-2">تعداد تایید</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {detail.map(item =>
                                                <tr key={item.DocumentID} value={item.DocumentID}>
                                                    <td>{item.DocumentCode}</td>
                                                    <td>{item.DrugDefinitionID}</td>
                                                    <td>{item.DrugEnglishName}</td>
                                                    <td>{item.DrugRequestQuantity}</td>
                                                    <td>{item.DrugAnswerQuantity}</td>
                                                </tr>
                                            )}
                                        </tbody>

                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>

                <nav className="navbar2 fixed-bottom navbar-light footer-font align-items-center align-self-center">
                    <BottomNavbar />
                </nav>


            </div>

            <br /><br /><br /><br />
        </>
    )
}
