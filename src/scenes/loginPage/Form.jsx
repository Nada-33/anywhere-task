import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state/stateMangament";
import Dropzone from "react-dropzone";
import styles from "./loginPage.module.scss"
//register validations
const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    occupation: yup.string().required("required"),
    picture: yup.string().required("required"),
});
//login validations
const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
});
//initials 
const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    occupation: "",
    picture: "",
};

const initialValuesLogin = {
    email: "",
    password: "",
};


function Form() {
    const [pageType, setPageType] = useState("login");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";
    //register function api set page to login
    const register = async (values, onsubmitProps) => {
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }
        formData.append("picturePath", values.picture.name);

        const savedUserResponse = await fetch(
            "http://localhost:3001/auth/register",
            {
                method: "POST",
                body: formData,
            }
        );
        if (savedUserResponse.ok) {
            const savedUser = await savedUserResponse.json();
            onsubmitProps.resetForm();
            setPageType("login");
        } else {
            // Handle registration error here
            const errorData = await savedUserResponse.json();
            console.error("Registration error:", errorData);
        }

    };
    //login function api 
    const login = async (values, onsubmitProps) => {
        const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        });


        const loggedIn = await loggedInResponse.json();
        onsubmitProps.resetForm();
        if (loggedInResponse.ok) {
            dispatch(
                setLogin({
                    user: loggedIn.user,
                    token: loggedIn.token
                })
            );
            navigate("/home")
        }
    };
    //handle the form subnit login or register
    const handleFormSubmit = async (values, onSubmitProps) => {
        console.log("Form submitted");
        if (isLogin) await login(values, onSubmitProps);
        if (isRegister) await register(values, onSubmitProps);
    };

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
            validationSchema={isLogin ? loginSchema : registerSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit} className={styles.form}>
                    {isRegister && (
                        <>
                            <div >
                                <input type="text" placeholder="first name" onBlur={handleBlur}
                                    onChange={handleChange} value={values.firstName}
                                    name="firstName" error={
                                        Boolean(touched.firstName) && Boolean(errors.firstName)
                                    }
                                    helperText={touched.firstName && errors.firstName}
                                />
                                <input type="text" placeholder="last name" onBlur={handleBlur}
                                    onChange={handleChange} value={values.lastName}
                                    name="lastName" error={
                                        Boolean(touched.lastName) && Boolean(errors.lastName)
                                    }
                                    helperText={touched.lastName && errors.lastName}
                                />
                                <input type="text" placeholder="occupation" onBlur={handleBlur}
                                    onChange={handleChange} value={values.occupation}
                                    name="occupation" error={
                                        Boolean(touched.occupation) && Boolean(errors.occupation)
                                    }
                                    helperText={touched.occupation && errors.occupation}
                                />
                                <div className={styles.dropImage}>
                                    <Dropzone
                                        acceptedFiles=".jpg,.jpeg,.png"
                                        multiple={false}
                                        onDrop={(acceptedFiles) =>
                                            setFieldValue("picture", acceptedFiles[0])
                                        }
                                    >
                                        {({ getRootProps, getInputProps }) => (
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                {!values.picture ? (<p> add picture here </p>) : (
                                                    <div>{values.picture.name}</div>
                                                )}
                                            </div>

                                        )}
                                    </Dropzone>
                                </div>

                            </div>
                        </>
                    )}

                    <input type="email" placeholder="email" onBlur={handleBlur}
                        onChange={handleChange} value={values.email}
                        name="email" error={
                            Boolean(touched.email) && Boolean(errors.email)
                        }
                        helperText={touched.email && errors.email}
                    />
                    <input type="password" placeholder="password" onBlur={handleBlur}
                        onChange={handleChange} value={values.password}
                        name="password" error={
                            Boolean(touched.password) && Boolean(errors.password)
                        }
                        helperText={touched.password && errors.password}
                    />


                    <div>

                        <button type="submit">submit</button>
                        {isLogin ? "LOGIN" : "REGISTER"}
                        <div onClick={() => {
                            setPageType(isLogin ? "register" : "login");
                            resetForm();
                        }}>
                            {isLogin
                                ? "Don't have an account? Sign Up here."
                                : "Already have an account? Login here."
                            }

                        </div>
                    </div>


                </form>
            )}

        </Formik>
    )
}

export default Form
