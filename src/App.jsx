
import "./vendors/simple-line-icons/css/simple-line-icons.css";
import "./vendors/flag-icon-css/css/flag-icon.min.css";
import "./vendors/css/vendor.bundle.base.css";
import "./vendors/daterangepicker/daterangepicker.css";
import "./vendors/chartist/chartist.min.css";
import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Componants/Header.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    <Header/>
    </>
  )
}

export default App
