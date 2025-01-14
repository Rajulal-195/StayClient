import "./home.scss";
import Sidebar from "../sidebar/Sidebar"
import Navbar from "../navbar/Navbar"
import BookingByHotel from "../Component/BookingByHotel";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homesContainer ">
        <Navbar />
        <BookingByHotel />
        

      </div>
    </div>
  );
};

export default Home;
