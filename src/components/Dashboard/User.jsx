import React from "react";
import styles from "./user.module.css";
import user from "../../assets/user.png";

function User() {
  const userData = JSON.parse(localStorage.getItem("values"));
  const selectedCategory = JSON.parse(localStorage.getItem("category"));

  return (
    <div>
      <div className={styles.userCard}>
        <img className={styles.userImage} src={user} alt="user" />
        <div className={styles.userData}>
          <div className={styles.userDetail}>
            <div className={styles.name}>{userData.name}</div>
            <div className={styles.email}>{userData.email}</div>
            <div className={styles.username}>{userData.username}</div>
          </div>
          <div className={styles.userCategory}>
            {selectedCategory.map((item, i) => {
              return (
                <div className={styles.categoryName} key={i}>
                  {item} &nbsp;
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
