import React from 'react'

export const AddOrEditRequestList = ({ object, removeItem, save }) => {


    const [data, setData] = React.useState('AAA');


    return (
        <>


            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr className="text-center">
                        <th className="col-md-1 center">ردیف</th>
                        <th className="col-md-1 center">کد کالا</th>
                        <th className="col-md-8">نام کالا</th>
                        <th className="col-md-1">تعداد </th>
                        <th className="col-md-1">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {object.map(item =>
                        <tr key={item.row} value={item.row}>
                            <td className="text-center">{item.row}</td>
                            <td className="text-center">{item.drugId}</td>
                            <td>{item.name}</td>
                            <td className="text-center">{item.count}</td>
                            <td className="text-center">
                                <button className="btn btn-warning btn4" onClick={() => removeItem(item.row)}>حذف</button>
                            </td>
                        </tr>

                    )}

                </tbody>
            </table>

            <button onClick={() => save(data)} type="submit" class="btn btn-success mt-3 btn3" >ثبت</button>

        </>
    )
}
