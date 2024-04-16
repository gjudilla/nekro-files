import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth.js';

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const handleLogin = () => {
        setLoggedIn(true);  
    };
    const handleLogout = () => {
        setLoggedIn(false);  
    };
console.log(loggedIn)
   return (
    <>
        <div className='flex items-center justify-between bg-white bg-opacity-25 p-4 h-full rounded-lg mb-4'>
            <h2 className='text-xl font-bold text-white'>Twilight Imperium</h2>
            <button
                className="font-bold text-lg text-blue-500 border-2 border-transparent rounded-md p-1 cursor-pointer hover:border-blue-500"   
                onClick={ loggedIn ? (handleLogout) : ( handleLogin )}
                // onClick={() => setLoggedIn(() => !loggedIn)}    

            >
                    {loggedIn ? (
                        <Link to='/'>LOGOUT</Link>
                    ) : (
                        <Link to='/dashboard'>LOGIN/SIGNUP</Link>
                    )}
            </button>
        </div> 
    </>
   ); 
};
export default Navbar