import React from 'react'
import "../Alertwindow/Error.css"
import { Link } from 'react-router-dom'

function Errorpage() {
  return (
    <>
      <div className='ajdesterror text-center'>
        <button className='btn btn-info m-3'   ><Link to="/contact"> Support</Link></button><br/>
        <img src='/images/ero.jpg'  alt='Page not Found ...!' />

      </div>
    </>
  )
}
export default Errorpage