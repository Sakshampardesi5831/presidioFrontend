import { CommonForm } from "../../components/CommonForm";

export const Login = () => {
  const textFields = [
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "Enter your email",
      attributes: {},
    },
    {
      id: "password",
      name: "password",
      label: "Password",
      type: "text",
      placeholder: "Enter your password",
      attributes: {},
    },
  ];

  const title = "Login";
  const btnText = "Login";

  const nextBtn = {
    text: "Register",
    link: "/register",
    desc: "if you are a new user please",
  };

  const radioField = [
    {
      value: "Buyers",
    },
    {
      value: "Sellers",
    },
  ];

  return (
    <>
      <CommonForm
        textFields={textFields}
        title={title}
        btnText={btnText}
        radioField={radioField}
        onRadioSelectionChange={(selectedValue) =>
          console.log("Selected Radio Button:", selectedValue)
        }
        nextBtn={nextBtn}
      />
    </>
  );
};
