import React, { useState } from 'react';
import Header from '../partials/Header';

const ProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar here if you want to add it */}

      {/* Main content */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <div className="mx-auto p-6 bg-gray-100 w-full min-h-full">
          {/* Account Section */}
          <section className="bg-white p-8 rounded-lg shadow-md mb-6 w-full">
            <h2 className="text-xl font-semibold mb-4">Account</h2>
            <p className="text-sm text-gray-500 mb-6">
              Real-time information and activities of your property.
            </p>

            {/* Profile Picture */}
            <div className="flex items-center mb-6">
              <img
                src="profile-picture-url.jpg"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="ml-6 space-x-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm mb-2">
                  Upload new picture
                </button>
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md text-sm">
                  Delete
                </button>
              </div>
            </div>

            {/* Full Name */}
            <div className="flex mb-6">
              <div className="w-1/2 pr-2">
                <label className="block text-sm font-medium text-gray-600 mb-2">First name</label>
                <input
                  type="text"
                  value="Bryan"
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-sm font-medium text-gray-600 mb-2">Last name</label>
                <input
                  type="text"
                  value="Cranston"
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600 mb-2">Contact email</label>
              <div className="flex items-center">
                <input
                  type="email"
                  value="bryan.cranston@mail.com"
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
                <button className="ml-4 bg-green-500 text-white py-2 px-4 rounded-md text-sm">
                  Add another email
                </button>
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600 mb-2">Password</label>
              <div className="flex mb-2">
                <input
                  type="password"
                  placeholder="Current password"
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div className="flex">
                <input
                  type="password"
                  placeholder="New password"
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
            </div>
          </section>

          {/* Integrated Accounts Section */}
          <section className="bg-white p-8 rounded-lg shadow-md mb-6 w-full">
            <h2 className="text-xl font-semibold mb-4">Integrated account</h2>

            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">Google Analytics</p>
                <p className="text-sm text-gray-500">Navigate the Google Analytics interface and reports.</p>
              </div>
              <button className="bg-green-500 text-white py-2 px-4 rounded-md text-sm">Connected</button>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">Google</p>
                <p className="text-sm text-gray-500">Use Google for faster login methods.</p>
              </div>
              <button className="bg-green-500 text-white py-2 px-4 rounded-md text-sm">Connected</button>
            </div>
          </section>

          {/* Account Security Section */}
          <section className="bg-white p-8 rounded-lg shadow-md w-full">
            <h2 className="text-xl font-semibold mb-4">Account security</h2>
            <div className="flex justify-between">
              <button className="bg-red-500 text-white py-2 px-4 rounded-md">Log out</button>
              <button className="bg-red-500 text-white py-2 px-4 rounded-md">Delete my account</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
