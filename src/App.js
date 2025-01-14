import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Contact from "./pages/Contact/Contact";
import Signup from "./pages/signup/Signup"
import '../src/App.css'
import '../src/index.css'
import Listrequest from "./components/ListingPro/Listreqest";
import About from "./pages/About/About";
import Userprofile from "./pages/login/Userprofile";
import { useEffect, useState } from "react";
import Loader from "./Alertwindow/Loader"
import Errorpage from "./Alertwindow/Errorpage";
import Listland from "./components/propertyList/Listland";
import Booking from "./components/reserve/Booking";
import Userupdate from "./pages/login/Userupdate";
import AllBooking from "./components/reserve/AllBooking";
import PaymentGate from "./components/reserve/PaymentGate";
import Admins from "./HotelsAdmin/home/Admins"
import ForgetPass from "./pages/signup/ForgetPass";

function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 50);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Errorpage />} />
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Listproperty" element={<Listland />} />
        <Route path="Listland" element={<Listrequest />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Userprofile />} />
        <Route path="/newbooking" element={<Booking />} />
        <Route path="/mybooking" element={<Booking />} />
        <Route path="/myAllbooking" element={<AllBooking />} />
        <Route path="/editprofile" element={<Userupdate />} />
        <Route path="/payment" element={<PaymentGate />} />
        <Route path="/admin" element={<Admins />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;