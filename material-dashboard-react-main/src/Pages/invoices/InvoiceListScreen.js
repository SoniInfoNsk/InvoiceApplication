import React, { useCallback } from "react";
import {useNavigate} from  "react-router-dom"
import Button from "components/Components/Button/Button";
import PageTitle from "components/Components/Common/PageTitle";
import InvoiceIcon from "components/Components/Icons/InvoiceIcon";
import MDButton from "components/MDButton";
import Invoice from "./Invoice";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";


function InvoiceListScreen() {
  const navigate = useNavigate();


  const goToNewInvoice = useCallback(() => {
    navigate("/invoices/new");
  }, [navigate]);




  return (
    <DashboardLayout>
      <DashboardNavbar/>
    <div>
     <div className="flex flex-col sm:flex-row flex-wrap p-4">
      <div className="sm:mr-4" >
       <PageTitle title="Invoices"/>
      </div>
      <div>
        <MDButton variant = "contained" size= 'large' color = 'info' onClick ={goToNewInvoice} style={{width:1000}}> Add new Invoice
        <InvoiceIcon/>
        </MDButton>
      </div>
      {/* <div>
       <Button onClick={goToNewInvoice} block={1} size="sm">
            <InvoiceIcon />
            <span className="inline-block ml-2"> Add New Invoice </span>
          </Button>
      </div> */}
     </div>

    </div>
    </DashboardLayout>
  )
}

export default InvoiceListScreen