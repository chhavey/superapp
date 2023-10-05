import React from "react";
import styles from "./leftPanel.module.css";
import alert from "../../assets/Vector.png";

function LeftPanel({ selectedCategory, onRemoveCategory, errorMessage }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.heading1}>Super app</h2>
          <h2 className={styles.heading2}>
            Choose your entertainment category
          </h2>

          <div>
            {selectedCategory ? (
              <>
                <div className={styles.categoryGrid}>
                  {selectedCategory.map((category, index) => (
                    <div key={index} className={styles.selectedCategory}>
                      {category} &nbsp;{" "}
                      <span onClick={() => onRemoveCategory(category)}>✖</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          {errorMessage && (
            <div className={styles.error}>
              <img src={alert} alt="" />
              &nbsp; {errorMessage}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LeftPanel;
