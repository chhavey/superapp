import React from "react";
import styles from "./notes.module.css";

function Notes() {
  return (
    <>
      <div className={styles.notesCard}>
        <div className={styles.notes}>
          <h2>All notes</h2>
          <textarea className={styles.textarea}></textarea>
        </div>
      </div>
    </>
  );
}

export default Notes;
