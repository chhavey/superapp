import React from "react";
import styles from "./movies.module.css";
import profile from "../../assets/profile-icon.png";

function Movies() {
  return (
    <div className={styles.moviesCard}>
      <div className={styles.header}>
        <div className={styles.title}>Super app</div>
        <img className={styles.profile} src={profile} alt="profile" />
      </div>

      <div className={styles.browseMovies}>
        <div className={styles.subTitle}>
          Entertainment according to your choice
        </div>

        <div className={styles.displayMovies}>
          {/* Movie to be displayed here */}
        </div>
      </div>
    </div>
  );
}

export default Movies;
