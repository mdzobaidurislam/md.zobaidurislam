import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Html from "./components/Work/Project/Html/Html";
import ReactProject from "./components/Work/Project/ReactProject/ReactProject";
import SinglePage from "./components/Work/SinglePage/SinglePage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="details/:id" element={<SinglePage />} />
        <Route path="" element={<Home />}>
          <Route path="html" element={<Html />} />
          <Route path="react" element={<ReactProject />} />
          <Route path="/" index element={<ReactProject />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
