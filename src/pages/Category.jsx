import React, { useState, useEffect } from "react";
import styles from "./category.module.css";
import LeftPanel from "../components/Category/LeftPanel";
import CategoryCards from "./../components/Category/CategoryCards";
import { useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate();
  const [selectedCardTile, setSelectedCardTile] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Load selected categories from local storage on component mount
  useEffect(() => {
    const storedCategories = JSON.parse(
      localStorage.getItem("selectedCategories")
    );
    if (storedCategories) {
      setSelectedCardTile(storedCategories);
    }
  }, []);

  // Save selected categories to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "selectedCategories",
      JSON.stringify(selectedCardTile)
    );
  }, [selectedCardTile]);

  const handleCardSelect = (title) => {
    if (selectedCardTile.includes(title)) {
      // Deselect the card if it's already selected
      setSelectedCardTile(selectedCardTile.filter((t) => t !== title));
    } else {
      // Select the card if it's not already selected
      setSelectedCardTile([...selectedCardTile, title]);
    }
  };

  const handleCardRemove = (titleToRemove) => {
    const updatedSelectedCategories = selectedCardTile.filter(
      (title) => title !== titleToRemove
    );
    setSelectedCardTile(updatedSelectedCategories);
  };

  const handleNextPageClick = () => {
    if (selectedCardTile.length < 3) {
      setErrorMessage("Minimum 3 categories required");
    } else {
      localStorage.setItem("category", JSON.stringify(selectedCardTile));
      navigate("/dashboard");
    }
  };

  return (
    <div className={styles.category}>
      <LeftPanel
        selectedCategory={selectedCardTile}
        onRemoveCategory={handleCardRemove}
        errorMessage={errorMessage}
      />
      <CategoryCards
        onSelectCard={handleCardSelect}
        onNextPageClick={handleNextPageClick}
        selectedCategory={selectedCardTile}
      />
    </div>
  );
}

export default Category;
