import React, { useEffect, useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Page from "../../components/Page";
import InputField from "../../components/InputField";
import { Typography } from "../../lib/typography";
import { Wrapper } from "./styles";

const ContactMe = () => {
  const myform = useRef();
  const firstRender = useRef(true);
  const [field, setField] = useState({
    message: "",
    name: "",
    email: "",
  });

  const handleChange = (e, field) => {
    setField((current) => ({
      ...current,
      [field]: e.target.value,
    }));
  };

  const validateEmail = (mail) => {
    /* eslint-disable*/
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    }
  }, [field.email, field.message, field.name]);

  const isEnabled =
    field.message && field.name && field.email && validateEmail(field.email);

  const sendEmail = (e) => {
    e.preventDefault();
    if (isEnabled) {
      sendForm(
        "service_dl5f9xs",
        "template_2xm2yg5",
        myform.current,
        "z6LRu3xyUdloFzIwY"
      ).then(
        (result) => {
          toast.success(
            "Thank you for getting in touch! I appreciate you contacting us! I will get back in touch with you soon! Have a great day!",
            {
              progress: undefined,
            }
          );
        },
        (error) => {
          toast.error(
            "Sorry, could you please reach out to lukejeffers51@gmail.com?",
            {
              progress: undefined,
            }
          );
          console.log(error);
        }
      );
    } else {
      firstRender.current = false;
    }
  };
  return (
    <Page title="CONTACT ME">
      <Wrapper>
        <Typography variant="h5" align="center">
          Every amazing partnership begins with a dialogue, and I believe the
          starting point for something extraordinary is a click away. Please
          fill out the form below and I'll be in touch to continue the
          conversation, and see where that takes me - to new products, or new
          visions, or new ways of using technology for shared benefit.
        </Typography>
        <Typography variant="h4" align="center">
          Let's make something great!
        </Typography>
        <form onSubmit={sendEmail} ref={myform}>
          <InputField
            label="Please tell me how I can help you"
            name="message"
            error={field.message === "" && !firstRender.current}
            onChange={(e) => handleChange(e, "message")}
            required
            helperText="This field is required."
            rows={3}
            type="textarea"
          />
          <InputField
            label="Name"
            name="user_name"
            error={field.name === "" && !firstRender.current}
            onChange={(e) => handleChange(e, "name")}
            required
            helperText="This field is required."
          />
          <InputField
            label="Email"
            name="user_email"
            error={
              (field.email === "" || !validateEmail(field.email)) &&
              !firstRender.current
            }
            onChange={(e) => handleChange(e, "email")}
            required
            helperText="Please enter a correct email."
          />
          <input
            type="submit"
            disabled={!isEnabled}
            value="Submit"
          />
        </form>
      </Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Page>
  );
};

export default ContactMe;
