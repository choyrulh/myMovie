import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Elements/Header/Header";
import { Suspense, lazy } from "react";
import Loader from "./Pages/Loader";
// import ErrorPage from "./Pages/ErrorPage";

function App() {
  const Home = lazy(() => import("./Pages/Home"));
  const Show = lazy(() => import("./Pages/Show"));
  const Coming = lazy(() => import("./Pages/Coming"));
  const About = lazy(() => import("./Pages/About"));
  const Contact = lazy(() => import("./Pages/Contact"));
  const ErrorPage = lazy(() => import("./Pages/ErrorPage"));

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/show" element={<Show />} />
            <Route path="/coming" element={<Coming />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
