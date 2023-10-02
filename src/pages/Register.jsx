import React from "react";
import styles from "./register.module.css";
import Form from "../components/Register/Form";
import LeftPanel from "../components/Register/LeftPanel";

function Register() {
  return (
    <div className={styles.register}>
      <LeftPanel />
      <Form />
    </div>
  );
}

export default Register;
