import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
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


  return (
    <div className="sidebar">
      <div className="top my-1 ">
        <Link to="/admin" className="">
          <img src="https://res.cloudinary.com/dwp3vqqoj/image/upload/v1729051767/dg9ejty46h1hglsnsccf.png" width={150} height={98} alt='Company Logo' />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>

          <li>
            <DashboardIcon className="icon" />
            <Link class="dropdown-item" to="/"> <span>Dashboard</span> </Link>
          </li>
        
          <li>
            <PersonOutlineIcon className="icon" />
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
            <CreditCardIcon className="icon" />
            <Link className="btn" to="/booking"><span className="m-0">Booking</span></Link>
          </li>
          <li>
            <CreditCardIcon className="icon" />
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
            <PhoneCallbackIcon className="icon" />
            <Link className="btn" to="/contact"><span className="m-0">Customer Quary</span></Link>
          </li>

{/* 
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span className="m-2">Logs</span>
          </li> */}
          <li>
            <InsertChartIcon className="icon" />
            <span className="m-2">Status</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span className="m-2">Notifications</span>
          </li>


          <li>
            <SettingsApplicationsIcon className="icon" />
            <span className="m-2">Settings</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon" />

            <Link class="dropdown-item" to="/profile"> <span>Profile</span> </Link>
          </li>
          <li>
            <button onClick={logOut} className="bg-danger border px-2">
              
            <ExitToAppIcon className="text-white" /> 
              <span className="text-white">
              Logout</span></button>
          </li>
        </ul>
      </div>
    
    </div>
  );
};

export default Sidebar;
