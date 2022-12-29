import React from 'react'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import Form from 'components/Components/Form'
import { AuthContextProvider } from 'stores/AuthContext'
import './InvoiceDetails.css'


function Invoicedetails() {
  return (
    <DashboardLayout>
      <AuthContextProvider>
        <Form />
      </AuthContextProvider>

    </DashboardLayout>


  )
}

export default Invoicedetails