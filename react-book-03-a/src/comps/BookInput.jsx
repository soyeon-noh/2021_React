import React, { useContext } from "react";
import "../css/BookInput.css";
import BookView from "./BookView";
import BookContext from "../context/BookContext";
import MyButton from "../My/MyButton";

function BookInput() {
  const { book, setBook } = useContext(BookContext);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  // name 을 value와 같은 이름으로해야 위코드가 작동
  return (
    <>
      <div className="book_input">
        <div>
          <label>도서명</label>
          <input name="b_name" value={book.b_name} onChange={onChangeHandler} />
        </div>
        <div>
          <label>장르</label>
          <input
            name="b_genre"
            value={book.b_genre}
            onChange={onChangeHandler}
          />
        </div>
        <MyButton onClick={() => alert("반가워")}>리스트 추가</MyButton>
      </div>
      <BookView />
    </>
  );
}

export default BookInput;
