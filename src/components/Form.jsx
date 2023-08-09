import { Typography, TextField, Button, FormHelperText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const Form1 = () => {
  // const [username,setUserName] = useState("");
  // const [password,setPassword] = useState("");

  const [userdetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  // useEffect(() => {
  //   if (userdetails.username.length > 5) {
  //     console.log("username is valid");
  //   }
  // }, [userdetails.username]);
  const handleSubmit = () => {
    console.log("username :", userdetails.username);
    console.log("password :", userdetails.password);
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
      onSubmit={(values) => {
        handleSubmit();
      }}
    >
      {({ values, errors, setFieldValue,handleBlur }) => {
        console.log("error : ", errors);
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
                    OnBlur={handleBlur}
              />
                   
              <FormHelperText error>
                <ErrorMessage name="age">Username should not be empty</ErrorMessage>
              </FormHelperText>
              <TextField
                label="email"
                name="email"
                variant="outlined"
                value={values.email}
                error={errors.email}
                onChange={(e) => setFieldValue("email", e.target.value)}
                OnBlur={handleBlur}
              />
                    
              <FormHelperText error>
                <ErrorMessage name="email">Username should not be empty</ErrorMessage>
              </FormHelperText>
              <TextField
                label="Password"
                variant="outlined"
                name="password"
                value={values.password}
                error={errors.password}
                onChange={(e) => setFieldValue("password", e.target.value)}
                OnBlur={handleBlur}
              />
                
              <FormHelperText error>
                <ErrorMessage name="password">Username should not be empty</ErrorMessage>
              </FormHelperText>
              <Button variant="contained">Submit</Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default Form1;
