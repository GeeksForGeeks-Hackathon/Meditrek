import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./container/Home/Home";
import MyDocs from "./container/MyDocs/MyDocs";
import Login from "./container/Login/Login";
import Register from "./container/Register/Register";
import AppointmentForm from "./container/AppointmentForm/AppointmentForm";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
        <Route path="/appointment" element={<AppointmentForm/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/healthreport" element={<MyDocs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
