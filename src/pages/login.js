import React from 'react'
import { Link } from 'react-router-dom'


export const Login = () => {
    return (
        <div className='  flex flex-col items-center mt-16'>
            <div className=' bg-write px-8 py-16 space-y-4 border'>
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
                    <input type="password" className='border py-2 pl-2'placeholder='Password'></input>
                </div>
                <div className='space-y-4 mt-4'>
                    <button className='bg-green-400 px-2 py-1 text-white'>Login</button>

                    <p>Not have account?</p>
                    <button className='bg-blue-400 px-2 py-1'><Link to="/signup">SingUp</Link></button>
                </div>

            </div>


        </div>
    )
}
