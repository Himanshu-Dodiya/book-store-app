import { Typography, TextField, Button, FormHelperText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import authService from "../services/authService";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Form1 = () => {
  const [userdetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const [userData,setUserData]=useState();
  // const getData = async () => {
  //   await axios.get(`http://localhost:5000/api/user/byId?id=${2089}`).then((response) => 
  //     setUserData(response.data)
  //   );
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  console.log("userData :", userData);
  const handleSubmit = async (values) => {
    console.log("username :", userdetails.username);
    console.log("password :", userdetails.password);
    const payload = {
      firstName: values.username,
      lastName: "test",
      email: values.email,
      roleId: 2,
      password: values.password,
    };

    await authService
      .Register(payload)
      .then((response) => {
        if (response.data.code === 200) {
          toast.success("Registered Successfully");
          console.log("After toast success");
        }
      })
      .catch((error) => {
        toast.error("Unable to Register Try Again!!");
      });
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    age: Yup.number().required("Required"),
  });
  return (
    <Formik
      initialValues={{ username: "", age: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ values, errors, setFieldValue, handleBlur }) => {
        return (
          <Form>
            <div className="form-demo">
              <Typography variant="h3">Register Here! </Typography>
              <TextField
                label="UserName"
                name="username"
                variant="outlined"
                value={values.username}
                error={errors.username}
                onChange={(e) => setFieldValue("username", e.target.value)}
                onBlur={handleBlur}
              />
              <FormHelperText error>
                <ErrorMessage name="username"></ErrorMessage>
              </FormHelperText>
              <TextField
                label="age"
                name="age"
                variant="outlined"
                value={values.age}
                error={errors.age}
                onChange={(e) => setFieldValue("age", e.target.value)}
                onBlur={handleBlur}
              />

              <FormHelperText error>
                <ErrorMessage name="age">
                  Username should not be empty
                </ErrorMessage>
              </FormHelperText>
              <TextField
                label="email"
                name="email"
                variant="outlined"
                value={values.email}
                error={errors.email}
                onChange={(e) => setFieldValue("email", e.target.value)}
                onBlur={handleBlur}
              />

              <FormHelperText error>
                <ErrorMessage name="email">
                  Username should not be empty
                </ErrorMessage>
              </FormHelperText>
              <TextField
                label="Password"
                variant="outlined"
                name="password"
                value={values.password}
                error={errors.password}
                onChange={(e) => setFieldValue("password", e.target.value)}
                onBlur={handleBlur}
              />

              <FormHelperText error>
                <ErrorMessage name="password">
                  Username should not be empty
                </ErrorMessage>
              </FormHelperText>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default Form1;
