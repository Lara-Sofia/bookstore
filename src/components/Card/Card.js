import { useContext } from "react";
import "./Card.css";
import { ThemeContext } from "../services/theme/theme.context";

const BookCard = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`book-item-container ${
        theme === "dark" && "book-item-container-dark"
      }`}
    >
      {children}
    </div>
  );
};

export default BookCard;