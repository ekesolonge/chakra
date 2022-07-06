import { Button, ButtonGroup, FormControl } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useState } from "react";
import * as yup from "yup";
import FirstPage from "../components/FormPages/FirstPage";
import SecondPage from "../components/FormPages/SecondPage";
import * as styles from "../styles/Home.module.css";

export default function Home() {
  const [formPage, setFormPage] = useState(0);
  const pages = [<FirstPage />, <SecondPage />];

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .required("Required"),
    email: yup.string().email("Email is invalid").required("Required"),
    password: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    occupation: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    income: yup.number("Must be a number").required("Required"),
  });

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          occupation: "",
          income: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {pages[formPage]}
            <FormControl>
              {formPage === pages.length - 1 ? (
                <ButtonGroup>
                  <Button onClick={() => setFormPage(formPage - 1)}>
                    Back
                  </Button>
                  <Button isLoading={isSubmitting} type="submit">
                    Sign Up
                  </Button>
                </ButtonGroup>
              ) : (
                <Button onClick={() => setFormPage(formPage + 1)}>
                  Continue
                </Button>
              )}
            </FormControl>
          </Form>
        )}
      </Formik>
    </div>
  );
}
