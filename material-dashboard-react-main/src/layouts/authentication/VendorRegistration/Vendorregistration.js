import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import images from 'assets/images/clients.jpg'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "css/style.css"
import { CenterFocusStrong } from "@mui/icons-material";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        top: 200,

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',

        },
        // '& .MuiButtonBase-root': {
        //   margin: theme.spacing(1),u

        // },
    },
}));

function Vendorregistration() {
    const [company_name, setClientcname] = useState("")
    const [gst_no, setClientGstNo] = useState("")
    const [address, setAdress] = useState(" ")
    const [email, setEmailid] = useState(" ")
    const [contact, setContactno] = useState("")
    const [website, setWebsite] = useState(" ")


    const classes = useStyles();
    // const vendorreg = () => {
    //     debugger;
    //     axios.post('http://localhost:5000/vendorregistration', {
    //         clientcname: clientcname,
    //         clientGstNo: clientGstNo,
    //         adress: adress,
    //         emailid: emailid,
    //         contactno: contactno,
    //         website: website
    //     }).then((response) => {
    //         console.log(response)
    //     })
    // }

    const clientpic = new URL("Images/clients.jpg", import.meta.url)

    async function saveData() {
        let data = { company_name, gst_no, email, contact, website, address }

        let result = await fetch('/users/vender_registration', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        result = await result.json()
        console.warn("result", result)
    }

    const navigate = useNavigate();

    function navigateto() {
        navigate('/clients/new');
    }



    return (
        <DashboardLayout>
<div className="main-container">
            <div className='h1heading'>
                <Typography component="h1" variant="h5" align="center" sx={{ fontWeight: 'bold', marginTop: 5 }}>
                    Vendor Registration
                </Typography>
            </div>
            <div className={classes.root}>
                <TextField label="Vendor Company Name" variant="filled" required onChange={(e) => {
                    setClientcname(e.target.value)
                }} />
                <TextField label="Client GST No." variant="filled" required onChange={(e) => {
                    setClientGstNo(e.target.value)
                }} />
                <TextField label="Adress" variant="filled" type="Adress" required onChange={(e) => {
                    setAdress(e.target.value)
                }} />
                <TextField label="Email" variant="filled" type="email" required onChange={(e) => {
                    setEmailid(e.target.value)
                }} />
                <TextField label="Contact No" variant="filled" type="Contact No" required onChange={(e) => {
                    setContactno(e.target.value)
                }} />
                <TextField label="Website" variant="filled" type="Website" required onChange={(e) => {
                    setWebsite(e.target.value)
                }} />

                <Button variant="contained" component="label" className='upload_button' style={{ width: 300, margin: 20 }}>
                    Upload Document
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                {/* <div>
                    <Button variant="contained" onClick={vendorreg} style={{ width: 180, backgroundColor: 'lightBlue' }}>Add </Button>
                </div> */}
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-10 border-b-4 border-blue-700 hover:border-blue-500 rounded" style={{ width: 180 }} onClick={saveData} >
                    Add
                </button>

                <div>
                    <button class="bg-transparent hover:bg-cyan-300 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"  style={{ width: 180, margin:20 }} onClick={navigateto}>
                        Next
                    </button>
                </div>
                {/* <div  className="client-pic">
                 <img src= {clientpic}/>
                 
                </div> */}
            </div>
        </div>
        </DashboardLayout>
        
    )
}

export default Vendorregistration