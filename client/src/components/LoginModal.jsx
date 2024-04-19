// import { useState } from 'react';

// import { useMutation } from '@apollo/client';
// import { LOGIN } from '../utils/mutations';
// import Auth from '../utils/auth';

// //need to take into account visible/closeModal as per SignupForm
// const LoginForm = ({ closeModal }) => {
//   const [userFormData, setUserFormData] = useState({ email: '', password: '' });
//   const [validated] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);

//   const [login, { error }] = useMutation(LOGIN)

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await login({
//         variables: { ...userFormData },
//       });

//       const { token } = await data.login;
//       Auth.login(token);
//       closeModal();
//     } catch (error) {
//       console.error(error);
//       setShowAlert(true);
//     }

//     setUserFormData({
//       email: '',
//       password: '',
//     });
//   };

//   return (
//     <>
//       <form className="w-full max-w-sm mx-auto" noValidate validated={validated} onSubmit={handleFormSubmit}>
//         {showAlert && (
//           <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
//             <span className="block sm:inline">Something went wrong with your login credentials: {error}!</span>
//             <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
//               <svg className="h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" onClick={() => setShowAlert(false)}>
//                 <title>Close</title>
//                 <path fillRule="evenodd" d="M14.348 5.652a.5.5 0 00-.708-.708L10 9.293 6.36 5.652a.5.5 0 10-.708.708L9.293 10l-3.64 3.64a.5.5 0 00.708.708L10 10.707l3.64 3.64a.5.5 0 00.708-.708L10.707 10l3.64-3.64z" clipRule="evenodd" />
//               </svg>
//             </span>
//           </div>
//         )}

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Your email"
//             value={userFormData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Your password"
//             value={userFormData.password}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           disabled={!(userFormData.email && userFormData.password)}
//         >
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default LoginForm;
