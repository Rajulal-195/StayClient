import { useState } from 'react'
import Header from './Header/Header'
import Sidebar from './Header/Sidebar'
import Home from './Header/Home'
import Navbar from "./navbar/Navbar"
import "./Header/Admin.css"


function Admins() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Navbar/>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default Admins
