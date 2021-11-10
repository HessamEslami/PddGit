import React from 'react';
import { useEffect } from 'react';
import { getAll } from '../services/todoService';
import { Link, NavLink, useHistory, useLocation, useParams } from 'react-router-dom';
import { PageTitle } from '../PageTitle';
import { SideBar } from '../SideBar';
import { Loading } from '../Loading';


export const Request = () => {

    let History = useHistory();
    const Location = useLocation();
    const [requests, setRequests] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const { shopId } = useParams();
    const USER = JSON.parse(localStorage.getItem('user'));
    const A = USER[0].ShopId;

    //const apiUrl = `http://localhost:8085/api/pdd/TSLoadRequests?shopid=${shopId}`;
    const apiUrl = window.BASE_URL + `/TSLoadRequests?shopid=${A}`


    useEffect(async () => {
        const result = await getAllRequest();
        setRequests(result);
        setIsLoading(false);
    }, [])



    const getAllRequest = async () => {
        const Response = await fetch(apiUrl);
        const result = Response.json();
        return result;
    }


    return (
        <>
            <PageTitle title="لیست درخواست" />
            <SideBar />
            <br /><br />
            <div className="card container" >

                <div className="card-header ch2">
                    <span className="form-title">
                        لیست درخواست نمایندگان
                    </span>
                </div>

                <div className="card-body">
                    <div className="row">


                        <div className="col">
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr className="text-center">
                                        <th className="col-md-1 center">سریال</th>
                                        <th className="col-md-6 center">عنوان</th>
                                        <th className="col-md-1 center">تاریخ تایید</th>
                                        <th className="col-md-2 center">وضعیت</th>
                                        <th className="col-md-1 center">جزئیات</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {requests.map(item =>
                                        <tr key={item.DocumentID} value={item.DocumentID} className={(item.DocumentStatus == 3) ? "cancel-row" : (item.DocumentStatus == 2) ? "accept-row" : ""}>
                                            <td>{item.DocumentID}</td>
                                            <td>{item.DocumentDescription}</td>
                                            <td className="text-center">{item.DocumentAnswerDate}</td>
                                            <td className="text-center">{(item.DocumentStatus == 1) ? "درخواست شده" : (item.DocumentStatus == 2) ? "تایید شده" : (item.DocumentStatus == 3) ? "ابطال شده" : ""}</td>
                                            <td className="text-center">

                                                <Link className="btn btn-sm btn-info" to={`/request-detail/${item.DocumentID}`} >
                                                    مشاهده
                                                </Link>
                                            </td>

                                        </tr>
                                    )}
                                </tbody>

                            </table>
                        </div>
                        {isLoading ? <Loading /> : null}
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
        </>
    )
}
