import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Html from "./components/Work/Project/Html/Html";
import ReactProject from "./components/Work/Project/ReactProject/ReactProject";
import SinglePage from "./components/Work/SinglePage/SinglePage";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import AllProject from "./components/Work/Project/All/AllProject";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="details/:id" element={<SinglePage />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="" element={<Home />}>
          <Route path="all" element={<AllProject />} />
          <Route path="html" element={<Html />} />
          <Route path="react" element={<ReactProject />} />
          <Route path="" index element={<AllProject />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
