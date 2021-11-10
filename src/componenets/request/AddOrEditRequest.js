import React, { useEffect } from 'react'
import { SideBar } from '../SideBar';
import '../../assets/css/AddOrEditRequest.css';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { AddOrEditRequestList } from './AddOrEditRequestList';
import { TopNavBar } from '../TopNavBar';
import { BottomNavbar } from '../BottomNavbar';
import { DrugListCombo } from './DrugListCombo';
import Select from 'react-select';
import { getAllDrug } from '../services/LoadDrugService';
import { PageTitle } from '../PageTitle';

export const AddOrEditRequest = () => {


    //===============   تعاریف متغیر   ==================
    const [object, setObject] = React.useState([]);
    const countRef = React.useRef();
    const descriptionRef = React.useRef();
    const searchRef = React.useRef();
    const [drugList, setDrugList] = React.useState([]);
    const [drugSearch, setDrugSearch] = React.useState([]);
    const [drugDefinitionID, setDrugDefinitionID] = React.useState();
    const [drugEnglishName, setDrugEnglishName] = React.useState();


    useEffect(async () => {
        const result = await getAllDrug();
        setDrugList(result);
        //setDrugList(result.splice(0, 10))
        //setIsLoading(false);
        countRef.current.value = 1;
    }, [])


    //=================    تابع مقدار دهی مقادیر سرچ   =============

    const setVariable = (DrugDefID, DrugName) => {
        setDrugDefinitionID(DrugDefID);
        setDrugEnglishName(DrugName);

        setDrugSearch([...drugSearch].filter(q => q.DrugDefinitionID == DrugDefID));

        console.log(DrugName);
    }

    //===============   تابع ساختن ردیف جدید   =============
    const newObject = (row, description, objectName, count, drugId) => {
        return { row: ([...object].length) + 1, description: description, name: objectName, count: count, drugId: drugId };
    }


    //===============   تابع دکمه اضافه نمودن   ===================
    const addToList = () => {

        var selectItem = document.getElementById('select-drug');

        if (drugEnglishName != null && descriptionRef.current.value != "") {
            if (countRef.current.value != 0) {


                setObject([...object, newObject('', descriptionRef.current.value, drugEnglishName, countRef.current.value, drugDefinitionID)]);


                //countRef.current.value = 0;
                countRef.current.value = 1;
                setDrugDefinitionID();
                setDrugEnglishName();
                searchRef.current.value = "";
                setDrugSearch([]);
                searchRef.current.focus();
            }
            else {

                Swal.fire({
                    icon: 'warning',
                    title: 'توجه',
                    text: 'تعداد در خواست را صحیح و بیش از صفر وارد کنید',
                })
            }
        }
        else {
            Swal.fire({
                icon: 'warning',
                title: 'توجه',
                text: 'برای ثبت درخواست انتخاب کالا  و وارد نمودن عنوان الزامی است .',
            })
        }


    }



    //=============    تابع دکمه انصراف     =================
    const cancel = () => {
        descriptionRef.current.value = "";
        // countRef.current.value = "1";
        searchRef.current.value = "";
        setDrugSearch([]);
    }

    // =============   تابع دکمه حذف   =====================
    const removeItem = (row) => {


        swal({
            title: "حذف محصول",
            text: "درصورت تایید از لیست درخواست حذف میشود.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            buttons: ["انصراف", "تایید"]
        })
            .then((willDelete) => {
                if (willDelete) {
                    setObject([...object].filter(q => q.row != row));
                }
            }
            )
    }


    //========================  تابع دکمه ثبت   ==================

    const Save = (Rows) => {
        const USER = JSON.parse(localStorage.getItem('user'));
        const requestDescription = object[0].description;
        const shopId = USER[0].ShopId;
        let requestDrugIds = '';
        let requestCount = '';

        {
            object.map((x, index) =>
                requestDrugIds = requestDrugIds + ',' + x.drugId
            )
        }

        {
            object.map((x, index) =>
                requestCount = requestCount + ',' + x.count
            )
        }

        console.log(requestCount.substring(1));
        console.log(USER[0].ShopId);


        //=====================   create insert API   ==================

        const webApi = window.BASE_URL + '/TSAddRequests?ShopID=' + shopId + '&DocumentDescription=' + requestDescription +

            '&DrugDefinitionIDS=' + requestDrugIds.substring(1) + '&DrugAnswerQuantitys=' + requestCount.substring(1)

        descriptionRef.current.value = "";
        //countRef.current.value = "1";
        searchRef.current.value = "";
        setDrugSearch([]);
        setObject([]);
        Swal.fire({
            icon: 'success',
            title: '',
            text: 'عملیات ارسال درخواست با موفقیت انجام شد .',
        })
        const response = fetch(webApi)
        console.log(webApi);
        return response;
    }


    //=========================   تابع دکمه جستجو   =====================
    const searchItem = (text) => {
        if (text != "" /*&& text.length >= 5*/) {

            setDrugSearch([...drugList].filter(q => q.DrugEnglishName.includes(searchRef.current.value)));

        }
        else {
            Swal.fire({
                icon: 'error',
                title: '',
                text: 'برای جستجو عبارتی وارد کنید .'
            })
        }

    }


    // ***************************   BODY   ***********************
    return (
        <>
            <PageTitle title="درخواست جدید" />
            <div className="main-panel">
                <TopNavBar />

                <SideBar />
                <br /><br />

                <div className="card container">
                    <div className="card-header ch1">
                        <span className="form-title">
                            فرم ثبت درخواست کالا
                        </span>
                    </div>

                    <div className="card-body">

                        <div className="contact-form">

                            <div className="row">
                                <div className="card card-form">
                                    <div className="card-body">
                                        <p className="text-p1">نماینده محترم ،</p>
                                        <p className="text-p2">برای ثبت درخواست ابتدا کالا مورد نظر را جستجو کرده و پس از انتخاب آن ، عنوان و تعداد درخواست را وارد کرده و دکمه اضافه به لیست را بزنید و در  نهایت درخواست خود را ثبت کنید .</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col col-md-4">
                                    <div class="form-group">
                                        <label for="inputDescription" className="mb-1">عنوان درخواست : </label>
                                        <input ref={descriptionRef} type="text" className="form-control mb-3" /*{(isRow)? disabled : null}*/ id="inputDescription" placeholder="Description" />
                                    </div>


                                    <div class="form-group">
                                        <label for="inputCount" className="mb-1">تعداد :</label>
                                        <input ref={countRef} type="number" class="form-control mb-3" id="inputCount" placeholder="Count" min="1" amx="999" />
                                    </div>


                                    <br />
                                    <button type="submit" class="btn btn-info mt-3 btn1" onClick={addToList}>اضافه به لیست </button>
                                    <button type="submit" class="btn btn-danger mt-3 btn2" onClick={cancel}>انصراف</button>
                                </div>

                                <div className="col col-md-1">

                                </div>


                                <div className="col col-md-6">
                                    <div className="form-group">
                                        <label for="inputSearch" className="mb-1">جستجو کالا :</label>
                                        <input ref={searchRef} type="text" className="form-control mb-3" id="inputSearch" placeholder="search" />
                                    </div>

                                    <table className="table table-stripped table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="with-1">کد</th>
                                                <th>نام کالا</th>
                                                <th className="with-1"> عملیات</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {drugSearch.map(itemSearch =>
                                                <tr value={itemSearch.DrugDefinitionID}>
                                                    <td>{itemSearch.DrugDefinitionID}</td>
                                                    <td>{itemSearch.DrugEnglishName}</td>
                                                    <td>
                                                        <button className="btn btn-sm btn6" onClick={() => setVariable(itemSearch.DrugDefinitionID, itemSearch.DrugEnglishName)}>
                                                            انتخاب
                                                        </button>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="col col-md-1">

                                    <button className="btn btn-md btn-primary btn5" onClick={() => searchItem(searchRef.current.value)}>جستجو</button>


                                </div>

                            </div>
                        </div>

                        <br /><br />


                        <AddOrEditRequestList object={object} removeItem={removeItem} save={Save} />

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

