import React, { useContext, useEffect, useState } from 'react'
import Headers from '../../components/header/Headers'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

function Userprofile() {
    const { user } = useContext(AuthContext);
    const [logData, setlogData] = useState("")

    const [datas, setdatas] = useState([])
    const [userId, setuserId] = useState('')

    console.log('authuser', user)

    const userdata = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        setlogData(user);
        setuserId(user._id)
    }

    const handledata = async () => {
        try {
            const res = await axios.get(`https://stayback1.onrender.com/api/users/find/${userId}`);
            setdatas(res.data);
        } catch (error) {
            console.log("Something went wrong!", error);
        }
    }
    useEffect(() => {
        handledata()
        userdata()
    }, [])

    return (
        <>
            <Headers />
            <div className='container'>
                <div className='row profil'>
                    <div className='col-md-6 my-4'>
                        <img className=' ingset' src={user.photos} width={273} height={350} />
                    </div>

                    <div className='col-md-6 settex '>
                        <Link to="/editprofile">
                            <img className='setedit' src="images/download.png" width={50} height={50} />
                            <button className=' btn '>
                            </button>
                        </Link>
                        <h5 className='username mt-5'>
                            Hello {user.username}
                        </h5>
                        <hr />
                        <p><strong>Name :</strong> &emsp;   {user.username}</p>
                        <p><strong>Email :</strong> &emsp; {user.email}</p>
                        <p><strong>Contact :</strong>  &emsp;{user.phone}</p>
                        <p><strong>Last Updates:</strong>  &emsp;{user.createdAt}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userprofile