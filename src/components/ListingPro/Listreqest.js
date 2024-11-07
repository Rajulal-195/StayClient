import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './List.css';
import Headers from '../header/Headers';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListRequest = () => {
  const [formData, setFormData] = useState({});
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [images, setImages] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const AllData = {}


  console.log("image data is", photos)
  console.log("checkbox data is", checkboxValues)
  console.log("all data is", formData)


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setCheckboxValues(prev =>
      checked ? [...prev, value] : prev.filter(val => val !== value)
    );
  };

  const handleFileChange = (e) => setImages(e.target.files);

  const handleUpload = async () => {
    if (images.length === 0) return toast.warn("Please select images to upload");
    setLoading(true);

    const formData = new FormData();
    Array.from(images).forEach(image => formData.append('images', image));

    try {
      const { data } = await axios.post('https://stayback1.onrender.com/uploads', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setPhotos(data.images);
      toast.success("Images uploaded successfully");
    } catch (error) {
      console.error('Error uploading images:', error);
      toast.error("Failed to upload images");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const completeData = { ...formData, checkboxValues, photos };

    setLoading(true);
    console.log("Submitting data:", completeData);

    try {
      const response = await axios.post('http://localhost:5000/api/contact/onbord', completeData);
      toast.success("Data uploaded successfully");
      navigate('/');
    } catch (error) {
      console.error('Error submitting data:', error.response ? error.response.data : error.message);
      toast.error(error.response?.data?.message || "Something went wrong during submission");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Headers />
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h3 className='emain'>Property Details</h3>
            <input type="text" className='m-3 p-2' name="name" onChange={handleInputChange} placeholder="Property Name" />
            <input type="email" className='m-3 p-2' name="email" onChange={handleInputChange} placeholder="Email" />
            <input type="text" className='m-3 p-2' name="phone" onChange={handleInputChange} placeholder="Contact" />
            <input type="number" className='m-3 p-2' name="rooms" onChange={handleInputChange} placeholder="Available Rooms" />
            <input type="number" className='m-3 p-2' name="price" onChange={handleInputChange} placeholder="Desired Price Per Room" />

            <h3 className='emain'>Address Details</h3>
            <input type="text" className='m-3 p-2' name="street" onChange={handleInputChange} placeholder="Street" />
            <input type="text" className='m-3 p-2' name="city" onChange={handleInputChange} placeholder="City" />
            <input type="text" className='m-3 p-2' name="state" onChange={handleInputChange} placeholder="State" />
            <input type="number" className='m-3 p-2' name="postalcode" onChange={handleInputChange} placeholder="Postal Code" />
            <input type="text" className='m-3 p-2' name="country" onChange={handleInputChange} placeholder="Country" />
            <input type="text" className='m-3 p-2' name="maplink" onChange={handleInputChange} placeholder="Google Map Link" />
            <p className='text-warning m-3'>* Please paste Google Map link here.</p>

            <h3 className='emain'>Facility Details</h3>
            {['Wi-fi', 'Parking', 'A.C.', 'Television', 'Food'].map(facility => (
              <label key={facility} className='changelable text-secondary'>
                <input
                  className='infix text-dark'
                  type="checkbox"
                  value={facility}
                  onChange={handleCheckboxChange}
                />
                {facility}
              </label>
            ))}

            <h3 className='emain'>Image Upload</h3>
            <div className='container mt-5'>
              <label className='mb-3'>Select Images:</label><br />
              <input type="file" multiple onChange={handleFileChange} />
              <button onClick={handleUpload} className='btn btn-secondary' disabled={loading}>
                {loading ? 'Uploading Images...' : 'Upload Images'}
              </button>
              <p className='text-warning m-3'>* Please select all images before uploading.</p>
            </div>

            <button onClick={handleSubmit} className='btn submithandle' disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListRequest;
