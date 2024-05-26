import { CommonForm } from "../../components/CommonForm";

export const Register = () => {
  const textFields = [
    {
      id: "firstName",
      name: "firstName",
      label: "First name",
      type: "text",
      placeholder: "Enter your first name",
      attributes: {},
    },
    { 
      id: "lastName",
      name: "lastName",
      label: "Last name",
      type: "text",
      placeholder: "Enter your last name",
      attributes: {},
    },
    {
      id: "email",
      label: "Email",
      name: "email",
      type: "text",
      placeholder: "Enter your email",
      attributes: {},
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      type: "text",
      placeholder: "Enter your password",
      attributes: {},
    },
    {
      id: "phone",
      label: "Phone",
      name: "phone",
      type: "text",
      placeholder: "Enter your phone",
      attributes: {},
    },
  ];

  const title = "Registeration";
  const btnText = "Register";

  const radioField = [
    {
        value: "Buyers",
    },
    {
        value: "Sellers",
    }
  ]

  const nextBtn = {
    text: "Login",
    link: "/login",
    desc: "if you already register please"
  }

  return (
    <>
      <CommonForm
        textFields={textFields}
        title={title}
        btnText={btnText}
        radioField = {radioField}
        onRadioSelectionChange={(selectedValue) =>
          console.log("Selected Radio Button:", selectedValue)
        }
        nextBtn = {nextBtn}
      />
    </>
  );
};
