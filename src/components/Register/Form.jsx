import React, { useState } from "react";
import styles from "./form.module.css";
import { useNavigate } from "react-router-dom";

function Form() {
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = Validation();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      localStorage.setItem("values", JSON.stringify(values));
      navigate("/category");
    }
  };

  const Validation = () => {
    let errors = {};

    if (!values.name) {
      errors.name = "Field is required";
    } else if (!isValidName(values.name)) {
      errors.name = "Invalid name";
    }

    if (!values.username) {
      errors.username = "Field is required";
    } else if (!isValidUserName(values.username)) {
      errors.username = "Invalid username";
    }

    if (!values.email) {
      errors.email = "Field is required";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Invalid email";
    }
    if (!values.mobile) {
      errors.mobile = "Field is required";
    } else if (!isValidMobile(values.mobile)) {
      errors.mobile = "Invalid mobile";
    }
    if (!values.terms) {
      errors.terms = "Check this box if you want to proceed";
    }

    return errors;
  };

  const isValidName = (name) => {
    return /^[a-zA-Z ]{2,30}$/.test(name);
  };
  const isValidUserName = (username) => {
    return /^[a-zA-Z0-9_-]{3,20}$/.test(username);
  };
  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };
  const isValidMobile = (mobile) => {
    return /^\d{10}$/.test(mobile);
  };

  return (
    <div className={styles.form}>
      <div className={styles.container}>
        <div className={styles.title}>Super app</div>
        <p className={styles.subtitle}>Create your new account</p>

        <form onSubmit={handleSubmit} className={styles.registration}>
          <input
            className={`${errors.name ? styles["error-input"] : ""}`}
            name="name"
            type="text"
            value={values.name}
            placeholder="Name"
            onChange={handleChange}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
          <input
            className={`${errors.username ? styles["error-input"] : ""}`}
            name="username"
            type="text"
            value={values.username}
            placeholder="UserName"
            onChange={handleChange}
          />
          {errors.username && <p className={styles.error}>{errors.username}</p>}
          <input
            className={`${errors.email ? styles["error-input"] : ""}`}
            name="email"
            type="email"
            value={values.email}
            placeholder="Email"
            onChange={handleChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
          <input
            className={`${errors.mobile ? styles["error-input"] : ""}`}
            name="mobile"
            type="text"
            value={values.mobile}
            placeholder="Mobile"
            onChange={handleChange}
          />
          {errors.mobile && <p className={styles.error}>{errors.mobile}</p>}
          <div>
            <input
              name="terms"
              value={values.terms}
              onChange={handleChange}
              type="checkbox"
            />
            <label className={styles.label}>
              Share my registration data with Superapp
            </label>
          </div>
          {errors.terms && <p className={styles.error}>{errors.terms}</p>}

          <button className={styles.btn} onClick={handleSubmit}>
            SIGN UP
          </button>

          <div className={styles.terms}>
            <p>
              By clicking on Sign up, you agree to Superapp &nbsp;
              <span style={{ color: "#72DB73" }}>
                Terms and Conditions of Use
              </span>
            </p>
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <span style={{ color: "#72DB73" }}>Privacy Policy</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
