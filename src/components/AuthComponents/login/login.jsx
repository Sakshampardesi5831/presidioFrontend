import { useEffect } from "react";
import { Fragment } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axiosInstance from "../../../services/axiosConfig";
import { apiEndpoints } from "../../../services/allEndpoints";
import { useNavigate } from "react-router-dom";
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  userType: Yup.string().required("User type is required"),
});

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (values, { resetForm }) => {
    console.log(values);
    const data = {
      email: values.email,
      password: values.password,
    };
    try {
      if (values.userType == "seller") {
        const result = await axiosInstance.post(apiEndpoints.sellerLogin, data);
        console.log(result);
      } else if (values.userType == "buyer") {
        const result = await axiosInstance.post(apiEndpoints.buyerLogin, data);
        localStorage.setItem("accessToken", result.data.accessToken);
        localStorage.setItem("refreshToken", result.data.refreshToken);
      }
      resetForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#85FFBD",
          backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "400px",
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
            Login
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: "",
              userType: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ errors, touched }) => (
              <Form>
                <Box sx={{ width: "100%" }}>
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
                  <Box sx={{ width: "100%", marginTop: "10px" }}>
                    {/* <FormLabel component="legend">User Type</FormLabel> */}
                    <Field name="userType">
                      {({ field }) => (
                        <RadioGroup {...field}>
                          <Box>
                            <FormControlLabel
                              value="seller"
                              control={<Radio />}
                              label="Seller"
                            />
                            <FormControlLabel
                              value="buyer"
                              control={<Radio />}
                              label="Buyer"
                            />
                          </Box>
                        </RadioGroup>
                      )}
                    </Field>
                    {touched.userType && errors.userType && (
                      <Typography sx={{ fontSize: "15px" }} color="error">
                        {errors.userType}
                      </Typography>
                    )}
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "center",
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
                      Login
                    </Button>
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

export default Login;
