import React from 'react'
import { Helmet } from 'react-helmet'

export const PageTitle = ({ title }) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
        </div>
    )
}
