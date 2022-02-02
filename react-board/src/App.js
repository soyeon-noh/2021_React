import logo from "./logo.svg";
import "./App.css";
import BoardContain from "./comp/BoardContain";
import BoardContextProvider from "./context/BoardContextProvider";
import Modal from "./comp/Modal";
import { BrowserRouter } from "react-router-dom";
import Write from "./comp/Write";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BoardContextProvider>
          <Modal>
            <Write />
          </Modal>
          <BoardContain />
        </BoardContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
