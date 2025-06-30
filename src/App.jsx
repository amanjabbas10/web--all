import "./style/style.css";
import Book from "./component/book";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/login";
import Login2 from "./component/login2";
import Kurdi from "./component/kurdi";
import Arabic from "./component/arabic";
import English from "./component/english";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/LOGIN2" element={<Login2 />} />
          <Route path="/LOGIN" element={<Login />} />
          <Route path="/Kurdi" element={<Kurdi />} />
          <Route path="/Arabic" element={<Arabic />} />
          <Route path="/English" element={<English />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
