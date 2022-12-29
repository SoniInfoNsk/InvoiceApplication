/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

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

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import React, { useState } from 'react'
import axios from 'axios'


function Cover() {

  const [email, setemailReg] = useState(" ")
  const [password, setpasswordReg] = useState(" ")
  const [first_name, setfirstname] = useState('')
  const [last_name, setlastname] = useState('')
  const [designation, setDesignation] = useState(" ")
  const [total_employee, setTotalemployee] = useState("")

  // http://localhost:5000/authentication/sign-up


  // const signup = () => {
  //   axios.post('http://localhost:5000/authentication/sign-up', {
  //     email: emailReg,
  //     password: passwordReg,
  //     firstname: firstname,
  //     lastname: lastname,
  //     designation: designation,
  //     totalemployee: totalemployee
  //   }).then((response) => {
  //     console.log(response);
  //   })
  // }

 async function saveData() {
    let data = {email,password, first_name, last_name,designation,total_employee}
    
  let result = await fetch('/users/userRegistration', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    })
    result = await result.json ()
    console.warn ("result",result)
  }


  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          {/* <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography> */}
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your Following Details to Register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="First Name" variant="standard" fullWidth  onChange={(e) => {
                setfirstname(e.target.value)
              }} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Last Name" variant="standard" fullWidth  onChange={(e) => {
                setlastname(e.target.value)
              }} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" variant="standard" fullWidth onChange={(e) => {
                setemailReg(e.target.value)
              }} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" variant="standard" fullWidth onChange={(e) => {
                setpasswordReg(e.target.value)
              }} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="designation" label="Designation" variant="standard" fullWidth onChange={(e) => {
                setDesignation(e.target.value)
              }} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="Total Employee" label="Total Employee" variant="standard" fullWidth onChange={(e) => {
                setTotalemployee(e.target.value)
              }} />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={saveData}  >
                Register
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
