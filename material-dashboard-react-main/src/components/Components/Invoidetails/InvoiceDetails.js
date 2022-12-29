import React from 'react'
import { useContext } from 'react'
import Input from '../UI/Input'
import './InvoiceDetails.css';
//import Authcontext from '../../../stores/AuthContext';
import AuthContext from 'stores/AuthContext';

const InvoiceDetails = () => {
    const cntx = useContext(AuthContext);

    return (
        <div className="billing_inf">
            <label className="billing_from">
                Invoice to:
                <Input onChange={(e) => {
                    cntx.dispatchingInvoiceDetails({
                        type: "CUST_NAME",
                        value: e.target.value

                    });
                }}
                    value={InvoiceDetails.cust_name}
                    type="text"
                    placeholder="Who is this invoice to?"
                />
                <Input
                    onChange={(e) => {
                        cntx.dispatchingInvoiceDetails({
                            type: "CUST_EMAIL",
                            value: e.target.value,
                        });
                    }}
                    value={InvoiceDetails.cust_email}
                    type="email"
                    placeholder="Email address"
                />
                <Input
                    onChange={(e) => {
                        cntx.dispatchingInvoiceDetails({
                            type: "CUST_ADD",
                            value: e.target.value,
                        });
                    }}
                    value={InvoiceDetails.cust_add}
                    type="text"
                    placeholder="Billing address"
                />
            </label>
            <label className="billing_to">
                Bill From
                <Input
                    onChange={(e) => {
                        cntx.dispatchingInvoiceDetails({
                            type: "MY_NAME",
                            value: e.target.value,
                        });
                    }}
                    value={InvoiceDetails.my_name}
                    type="text"
                    placeholder="Who is this invoice from?"
                />
                <Input
                    onChange={(e) => {
                        cntx.dispatchingInvoiceDetails({
                            type: "MY_EMAIL",
                            value: e.target.value,
                        });
                    }}
                    value={InvoiceDetails.my_email}
                    type="email"
                    placeholder="Email address"
                />
                <Input
                    onChange={(e) => {
                        cntx.dispatchingInvoiceDetails({
                            type: "MY_ADD",
                            value: e.target.value,
                        });
                    }}
                    value={InvoiceDetails.my_add}
                    type="text"
                    placeholder="Billing address"
                />
            </label>
        </div>
    );
};

export default InvoiceDetails ;

