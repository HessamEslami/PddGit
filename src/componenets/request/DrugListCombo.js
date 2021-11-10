import React, { useEffect } from 'react'
import { Loading } from '../Loading';
import { getAllDrug } from '../services/LoadDrugService';
import '../../assets/css/DrugListCombo.css';





export const DrugListCombo = ({ changeItem, changeName }) => {

    const [drugs, setDrugs] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(async () => {
        const result = await getAllDrug();
        //setDrugs(result);
        setDrugs(result.splice(0, 10))
        setIsLoading(false);
    }, [])

    return (
        <>
            <select id="select-drug" className="form-control" searchable="جستجو"
                onChange={(event) => changeItem(event.target.value)} >
                <option>
                    لطفا دارو را انتخاب کنید
                </option>
                {drugs.map(drug =>
                    <option key={drug.DrugDefinitionID} value={drug.DrugDefinitionID}>{drug.DrugEnglishName}</option>
                )}
            </select>

        </>
    )
}


//   {isLoading ? <Loading /> : null}
