import React from "react";
import styles from "./leftPanel.module.css";
import Image from "../../assets/homepage.png";

function LeftPanel() {
  return (
    <>
      <div className={styles.panel}>
        <img src={Image} alt="SuperApp Welcome Banner" className={styles.img} />

        <h1 className={styles.heading}>Discover new things on Superapp</h1>
      </div>
    </>
  );
}

export default LeftPanel;
