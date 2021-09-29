import React, { useContext } from "react";
import BookContext from "../context/BookContext";

function BookInput() {
  const { book, setBook } = useContext(BookContext);
  const onChangeHandler = (e) => {
    setBook(e.target.value);
  };

  return (
    <div>
      {/* Provider에서는 value라는 키워드로 항상 전달해야 함! */}
      <input
        placeholder="도서명 입력"
        value={book}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default BookInput;
