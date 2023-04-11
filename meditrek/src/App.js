import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./container/Home/Home";
import SignIn from "./container/SignIn/SignIn";
import AppointmentForm from "./container/AppointmentForm/AppointmentForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
        <Route path="/appointment" element={<AppointmentForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
