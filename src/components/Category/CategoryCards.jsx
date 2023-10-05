import React from "react";
import styles from "./categoryCards.module.css";
import categoryData from "./CategoryData";

function CategoryCards({ onSelectCard, onNextPageClick, selectedCategory }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardWrapper}>
          {categoryData.map((category) => (
            <div
              className={styles.card}
              key={category.id}
              style={{
                backgroundColor: category.color,
                outline: !selectedCategory.includes(category.title)
                  ? "none"
                  : "3px solid #11B800",
              }}
              onClick={() => onSelectCard(category.title)}
            >
              <h2>{category.title}</h2>
              <img
                className={styles.image}
                src={category.image}
                alt={category.title}
              />
            </div>
          ))}
          <button onClick={onNextPageClick}>Next Page</button>
        </div>
      </div>
    </>
  );
}

export default CategoryCards;
