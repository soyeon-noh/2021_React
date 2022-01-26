import { AppContextProvider } from "../../context";
import "../../css/TodoMain.css";

function TodoMain({ header, form, children }) {
  return (
    <AppContextProvider>
      <main className="todo_main_layout">
        <section className="title">{header}</section>
        <section className="form_wrapper">{form}</section>
        <section className="list_wrapper">{children}</section>
      </main>
    </AppContextProvider>
  );
}

export default TodoMain;
