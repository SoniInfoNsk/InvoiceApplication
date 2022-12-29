import React from 'react'
import Allitem from './Items/Allitem'
import InvoiceDetails from './Invoidetails/InvoiceDetails'
import './FormInvoice.css'
import InvoiceHeader from './InvoiceHeader/InvoiceHeader'
import Notes from './Notes/Notes'

const FormInvoice = () => {
    return (
        <div className="invoice_form">
            <InvoiceHeader />
            <InvoiceDetails />
            <Allitem />
            <Notes />
        </div>
    )
}

export default FormInvoice;