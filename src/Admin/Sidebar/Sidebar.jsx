import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../context/AuthContext';


const Sidebar = () => {

  const [logData, setlogData] = useState("")

  const userdata = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    setlogData(user);
  }

  const logOut = () => {
    localStorage.removeItem('user')
    window.location.href = 'login'
  }
  useEffect(() => {
    userdata()
  }, [])


  const { user } = useContext(AuthContext);


  // const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top my-1 ">
        <Link to="/" className="">
          <img src='https://res.cloudinary.com/dwp3vqqoj/image/upload/v1729051767/dg9ejty46h1hglsnsccf.png' width={145} height={110} alt='Company Logo' />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>

          <li>
            <Link class="dropdown-item" to="/"> <span>Dashboard</span> </Link>
          </li>

          <li>
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="m-0">
                  User
                </span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <Link class="dropdown-item" to="/users">User</Link>
                <Link class="dropdown-item" to="/users/new">Add User</Link>
                <Link class="dropdown-item" to="/users/:userId">Delete</Link>
              </ul>
            </div>



            {/* hotels  section  */}
          </li>
          <li>
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="m-0">Hotel</span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <Link class="dropdown-item" to="/hotels">View Hotel</Link>
                <Link class="dropdown-item" to="/hotels/new">Add Hotel</Link>
                <Link class="dropdown-item" to="/hotels/:productId">Update </Link>

              </ul>
            </div>

          </li>

          <li>
            <Link className="btn" to="/booking"><span className="m-0">Booking</span></Link>
          </li>
          <li>
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="m-0">Room</span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <Link class="dropdown-item" to="/rooms">View Rooms</Link>
                <Link class="dropdown-item" to="/rooms/new">Add Room</Link>
                <Link class="dropdown-item" to="/hotels/:productId">Update </Link>

              </ul>
            </div>
          </li>
          <li>
            <Link className="btn" to="/contact"><span className="m-0">Customer Quary</span></Link>
          </li>

          {/* 
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span className="m-2">Logs</span>
          </li> */}
          <li>
            <span className="m-2">Status</span>
          </li>
          <li>
            <span className="m-2">Notifications</span>
          </li>


          <li>
            <span className="m-2">Settings</span>
          </li>
          <li>

            <Link class="dropdown-item" to="/profile"> <span>Profile</span> </Link>
          </li>
          <li>
            <button onClick={logOut} className="bg-danger border px-2">

              <span className="text-white">
                Logout</span></button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
