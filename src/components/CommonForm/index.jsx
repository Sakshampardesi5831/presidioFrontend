import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { buyerLogin, buyerSignUp, sellerLogin, sellerSignUp } from "../../services";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const CommonForm = ({
  textFields,
  title,
  btnText,
  nextBtn,
  radioField,
  onRadioSelectionChange,
}) => {
  // Initialize the form values dynamically
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false); // State for Snackbar open/close
  const [message, setMessage] = useState(""); //
  const location = useLocation();
  const navigate = useNavigate();

  const initialValues = {};
  if (textFields) {
    textFields.forEach((field) => {
      initialValues[field.name] = ""; // Assuming all fields start empty
    });
  }

  if (radioField) {
    initialValues["userType"] = "";
  }

  const onSubmit = async (values, { resetForm }) => {
    console.log("values", values);
    try {
      if(location.pathname === '/register'){
        if (values.userType) {
          if (values.userType === "Buyers") {
            const res = await buyerSignUp(values);
            console.log("res from registration form", res);
            if (res.data.success) {
              setMessage("Buyer registration successful"); // Set success message
              setOpen(true); // Open Snackbar
              resetForm();
            }
          } else {
            const res = await sellerSignUp(values);
            console.log("res from registration form", res);
            if (res.data.success) {
              setMessage("Seller registration successful"); // Set success message
              setOpen(true); // Open Snackbar
              resetForm();
            }
          }
        }
      } else if(location.pathname === '/login'){
        if (values.userType === "Buyers") {
          const res = await buyerLogin(values);
          console.log("res from buyer loign form", res);
          if (res.status === 200) {
            localStorage.setItem("token", res.data.accessToken);
            setMessage("Buyer login successful"); // Set success message
            setOpen(true); // Open Snackbar
            navigate('/', {state: {userType: "Buyer"}})
            resetForm();
          }
        } else {
          const res = await sellerLogin(values);
          localStorage.setItem("token", res.data.accessToken);
          console.log("res from seller login form", res);
          if (res.status === 200) {
            setMessage("Seller login success"); // Set success message
            setOpen(true); // Open Snackbar
            navigate('/', {state: {userType: "Seller"}})
            resetForm();
          }
        }
      }
    } catch (error) {
      setMessage("Error in registering"); // Set error message
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
  });

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: 500,
          margin: "auto",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "5px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1>{title}</h1>
        <form onSubmit={formik.handleSubmit}>
          <Box>
            {textFields.map((field, index) => (
              <TextField
                key={index}
                id={field.id}
                name={field.name} // Use the field's name here
                label={field.label}
                value={formik.values[field.name]} // Ensure the value is mapped correctly
                onChange={formik.handleChange}
                variant="outlined"
                fullWidth
                placeholder={field.placeholder}
                sx={{
                  mt: "20px",
                }}
                {...formik.getFieldProps(field.name)}
              />
            ))}
          </Box>
          {radioField && (
            <Box sx={{ mt: "20px" }}>
              <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue=""
                  onChange={(e) => onRadioSelectionChange(e.target.value)}
                >
                  {radioField.map((field, index) => (
                    <FormControlLabel
                      key={index}
                      name="userType"
                      value={field.value}
                      control={<Radio />}
                      label={field.value}
                      onChange={(event) => {
                        const targetValue = event.target.value;
                        formik.setFieldValue("userType", targetValue);
                      }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
          )}
          <Box
            sx={{
              mt: "20px",
              float: "left",
              display: "flex",
              gap: "20px",
            }}
          >
            <Button
              type="submit" // Add type="submit" to trigger form submission
              variant="contained"
              sx={{
                // mt: "20px",
                // float: "left",
                height: "45px",
              }}
            >
              {btnText}
            </Button>
            <Box sx={{ display: "flex", gap: "4px", mt: "18px" }}>
              <Typography>{nextBtn.desc}</Typography>
              <Link to={nextBtn.link}>{nextBtn.text}</Link>
            </Box>
          </Box>
        </form>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
