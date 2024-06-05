import { Fragment } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import  axiosInstance  from "../../../services/axiosConfig";
import { apiEndpoints } from "../../../services/allEndpoints";
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  phone: Yup.string().required("Phone Number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  role: Yup.string().required("Role is required"),
});

const Register = () => {
  const handleRegister = async (values, { resetForm }) => {
    console.log(values);
    try {
      const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
        password: values.password,
      };
      if (values.role == "seller") {
        const result = await axiosInstance.post(
          apiEndpoints.sellerRegister,
          data
        );
        console.log(result);
      } else if (values.role == "buyer") {
        const result = await axiosInstance.post(
          apiEndpoints.buyerRegister,
          data
        );
        console.log(result.data.message);
      }
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
          height: "calc(100vh - 55px)",
          backgroundColor: "#85FFBD",
          backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "500px",
            height: "550px",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              padding: "10px",
              textAlign: "center",
              fontWeight: "800",
              fontSize: "30px",
            }}
          >
            Register as Seller
          </Typography>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              password: "",
              role: "seller", // default value for role
            }}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            {({ errors, touched, values }) => (
              <Form>
                <Box sx={{ width: "100%" }}>
                  <Field
                    name="firstName"
                    as={TextField}
                    label="Enter the First Name"
                    sx={{ width: "100%", marginTop: "10px" }}
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                  <Field
                    name="lastName"
                    as={TextField}
                    label="Enter the Last Name"
                    sx={{ width: "100%", marginTop: "10px" }}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                  <Field
                    name="phone"
                    as={TextField}
                    label="Enter the Phone Number"
                    sx={{ width: "100%", marginTop: "10px" }}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                  <Field
                    name="email"
                    as={TextField}
                    label="Enter the Email"
                    sx={{ width: "100%", marginTop: "10px" }}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <Field
                    name="password"
                    as={TextField}
                    label="Enter the Password"
                    type="password"
                    sx={{ width: "100%", marginTop: "10px" }}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <Field name="role">
                    {({ field }) => (
                      <RadioGroup {...field} row sx={{ marginTop: "10px" }}>
                        <FormControlLabel
                          value="seller"
                          control={<Radio />}
                          label="Seller"
                          checked={values.role === "seller"}
                        />
                        <FormControlLabel
                          value="buyer"
                          control={<Radio />}
                          label="Buyer"
                          checked={values.role === "buyer"}
                        />
                      </RadioGroup>
                    )}
                  </Field>
                  <Box
                    sx={{
                      width: "100%",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      type="submit"
                      sx={{
                        width: "40%",
                        marginTop: "10px",
                        backgroundColor: "#85FFBD",
                        backgroundImage:
                          "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
                        color: "#000",
                        fontWeight: "700",
                      }}
                      variant="contained"
                    >
                      Register
                    </Button>
                    <Typography>Login</Typography>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Register;
