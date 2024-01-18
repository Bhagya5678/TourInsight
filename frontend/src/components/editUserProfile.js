import React, { useState } from 'react';
import profileimg from "../images/hotel.png";

function UserProfileForm() {

    const [name, setName] = useState("Bhagya Bijlaney");
    const [email, setEmail] = useState("abc@xyz.com");
    const [contact, setContact] = useState("9999999");
    const [emerContact, setEmerContact] = useState("9999999");
    const [AltEmerContact, setAltEmerContact] = useState("9999999");

    return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="mx-auto p-6 bg-white rounded-md shadow-md w-1/2">
        <div className="mb-5 text-center">
          <img
            className="w-32 h-32     rounded-full mx-auto mb-3"
            src={profileimg} // Replace with the actual URL or import the image
            alt="Profile"
          />
          <label htmlFor="profilePhoto" className="cursor-pointer text-blue-500">
            Edit Profile Photo
          </label>
          <input
            type="file"
            id="profilePhoto"
            className="hidden"
            onChange={(e) => console.log("Selected file:", e.target.files[0])}
          />
        </div>

        <form className="w-5/6 mx-auto">
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Full Name
                </label>
                <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                required
                />
                </div>
                <div className="mb-5">
                <label htmlFor="phonenumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone Number
                </label>
                <input
                        type="text"
                        id='phonenumber'
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="emercontact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Emergency Contact
                </label>
                    <input
                        type='text'
                id="emercontact"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={emerContact}
                            onChange={(e) => setEmerContact(e.target.value)}
                required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="altemer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Alternate Emergency Contact
                </label>
                <input
                        type="text"
                        id='altemer'
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={AltEmerContact}
                            onChange={(e) => setAltEmerContact(e.target.value)}
                required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
                </label>
                <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            
                  <div className='flex justify-center'>
                  <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
            </div>
            </form>
      </div>
    </div>
  );
}

export default UserProfileForm;
