import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export const More = () => {
  const [contact, setContact] = useState()

  let { contactId } = useParams();

  const fetchContact = (id) => {
    axios.get("https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/findById?id=" + id)
      .then((resp) => {
        setContact(resp.data.contact);
      }).catch((error) => {
        console.log(error);
        alert("Failed to fetch contact");
      });
  };

  const deleteContact = (id) => {
    axios.delete( "https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/delete?id=" + id)
    .then((resp) => {
        console.log(resp.data);
        fetchContact(); // To refresh the contacts list
        alert("successful deleted");
    })
    .catch((error) => {
        console.log(error);
        
    });
 };

  useEffect(() => {
    fetchContact(contactId);
  }, [contactId]);

  return (
    <div className='flex flex-col items-center'>
      <div className='mt-8  flex md:flex-row md:justify-around md:items-center border-2 px-16 py-16 w-9/12 items-center justify-around '>
        <div>
          <h1 className='font-bold text-2xl'>About This Contact</h1>
          <p className='mt-8'>Full names: {contact ? contact.fullName : "Not available"}</p>
          <p>E-mail: {contact ? contact.email : "Not available"}</p>
          <p>Phone: {contact ? contact.phone : "Not available"}</p>
          <p>Created on : {contact ? contact.updatedAt : "Not available"}</p>
        </div>
        <div className='sm:space-x-4  space-y-4 '>
          <button className='bg-black py-1 px-2 text-white'><Link to={`/update/${contactId}`}>Update</Link></button>
          <button className='bg-red-600 py-1 px-2 text-white'  onClick={() => deleteContact(contactId)}>Delete</button>
        </div>
      </div>
      <button className='bg-green-800 text-white font-bold py-1 px-2 mt-8 mb-4' ><Link to="/Table">View Contact</Link></button>
    </div>
  )
}
