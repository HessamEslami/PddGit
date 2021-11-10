import React from 'react'

export const Loading = () => {
    return (
        <>

            <button className="btn btn-primary ml-5" type="button" disabled>
                .... درحال بارگذاری اطلاعات
                <span className="spinner-grow spinner-grow-sm mr-5" role="status" aria-hidden="true"></span>

            </button>
        </>
    )
}
