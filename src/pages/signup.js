import React from 'react'
import { Link } from 'react-router-dom'


export const SingUp = () => {
    return (
        <div className='  flex flex-col items-center mt-16'>
            <div className=' bg-write px-8 py-16 border space-y-4'>
                <div>
                    <label for="name">Name</label><br></br>
                    <input type="text" className='border py-2 pl-2' placeholder='Your name'></input>
                </div>
                <div>
                    <label for="e-mail">E-mail</label><br></br>
                    <input type="text" className='border py-2 pl-2' placeholder='E-mail'></input>
                </div>
                <div>
                    <label for="password">Password</label><br></br>
                    <input type="password" className='border py-2 pl-2' placeholder='Re-Wrie Password'></input>
                </div>
                <button className='bg-blue-400 px-2 py-1 mt-4 text-white'><Link to="/table">SingUp</Link></button>


            </div>


        </div>
    )
}

