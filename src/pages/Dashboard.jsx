import React from "react";
import styles from "./dashboard.module.css";
import User from "../components/Dashboard/User";
import Weather from "../components/Dashboard/Weather";
import News from "../components/Dashboard/News";
import Notes from "../components/Dashboard/Notes";
import Timer from "../components/Dashboard/Timer";

function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <div className={styles.box2}>
          <div className={styles.box3}>
            <div className={styles.box4}>
              <User />
              <Weather />
            </div>
            <Notes />
          </div>
          <Timer />
        </div>
        <News />
      </div>
    </div>
  );
}

export default Dashboard;
