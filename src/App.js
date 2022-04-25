import logo from "./logo.svg";
import "./App.css";
import PhanTrang from "./PhanTrang/PhanTrang";
import "../src/styles/gobal.style.scss";
import PhanTrang2 from "./PhanTrang/PhanTrang2";
import Form from "./Form/Form";

function App() {
  return (
    <div className="App">
      {/* <PhanTrang /> */}
      <PhanTrang2 />
      <Form />
    </div>
  );
}

export default App;
