import React from "react";
import styles from "./dashboard.module.css";
import User from "../components/Dashboard/User";
import Weather from "../components/Dashboard/Weather";
import News from "../components/Dashboard/News";
import Notes from "../components/Dashboard/Notes";
import Timer from "../components/Dashboard/Timer";

function Dashboard() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.item1}>
            <User />
          </div>
          <div className={styles.item2}>
            <Notes />
          </div>
          <div className={styles.item3}>
            <News />
          </div>
          <div className={styles.item4}>
            <Weather />
          </div>
          <div className={styles.item5}>
            <Timer />
          </div>
        </div>
        <button className={styles.button}>Browse</button>
      </div>
    </>
  );
}

export default Dashboard;
