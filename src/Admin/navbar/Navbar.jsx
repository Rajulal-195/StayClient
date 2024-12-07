import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const [logData, setlogData] = useState("")
  const userdata = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    setlogData(user);
  }

  const logOut = () => {
    localStorage.removeItem('user')
    window.location.href = '/'
  }
  useEffect(() => {
    userdata()
  }, [])

  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
      

          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>

          <div className="item">


            {user ? (<><div class="dropdown">
              <img
                src={user.photos}
                alt="avtar "
                className="avatar"
              />
              <button class="btn pro dropdown-toggle  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-user-alt text-white me-2"></i>
                {user.username}
              </button>
              <ul class="dropdown-menu bg-primary text-dark " aria-labelledby="dropdownMenuButton1">
                <Link class="dropdown-item text-white profile ms-3" to="/profile">Profile</Link>


                <button onClick={logOut} className="px-2  bg-danger border-primary text-white tax">
                  <ExitToAppIcon className="text-white" />

                  Logout</button>

              </ul>
            </div></>) : (<>
              <div className="navbar-nav">
                <Link to="/Lo" className="nav-item nav-link usre">Welcome Back Admin</Link>
              </div>

            </>)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;