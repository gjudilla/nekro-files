import { useState } from 'react';


const AppNavbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);

   return (
    <>
        <div className='flex items-center justify-between bg-gray-700 p-4 h-full border-b-2'>
            <h2 className='text-[24-px font-bold text-blue-400'>Twighlight Emporium Tracker</h2>
            <h2 className='text-[24-px font-bold text-blue-500 hover:border-[2px] border-blue-500 rounded-md p-1 text-[15px] cursor-pointer'>LOGOUT</h2>
        </div>
        
    </>
   ); 
};
export default AppNavbar