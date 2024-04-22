
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Pic from '../images/profile.png'
export const Table = () => {
    const [contacts, setContacts] = useState([])

    const fetchContact = () => {

        axios.get('https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/list').then((res) => {
            setContacts(res.data.contacts)
            console.log(res.data.contacts);
        }).catch((err) => {
            console.log(err);
            alert("Fetching contacts failed");
        });
    }


    useEffect(() => {
        fetchContact();
    }, []);


    return (
        <div >
            <div className=' flex flex-col items-end pr-4'>
            <button className='bg-gray-800 hover:bg-blue-400  text-white font-bold py-1 px-2 mt-4 mb-4' ><Link to="/home">Add New</Link></button>
            </div>
            
            <div className='flex flex-wrap items-center justify-center'>
                {
                    (contacts !== null) ? contacts.map((contact, index) => {
                        return <div key={index}>
                            <div className='flex flex-row bg-cyan-700 justify-around m-4 items-center  px-8 py-8 w-96 border-2'>
                                <p>{contact.fullName}</p>
                                <img src={Pic} alt="" className='w-12 h-10' />
                                <button className='bg-gray-400 rounded-full hover:border-4 text-white font-bold py-1 px-2 mt-4'>
                                    <Link to={`/details/${contact._id}`}>View</Link>
                                </button>
                            </div>
                        </div>
                    }) : "No contacts found!"
                }
            </div>



        </div >
    )
}
