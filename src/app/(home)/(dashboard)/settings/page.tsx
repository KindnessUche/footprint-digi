import React from "react";

export default function page() {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    username: "johndoe123",
    joined: "2024-08-12",
  };

  return (
    <div className="max-w-4xl mr-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">My Profile</h1>

      <div className="bg-transparent shadow dark:shadow-neutral-700 rounded-lg p-6 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-500 text-white text-2xl font-bold flex items-center justify-center rounded-full">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              @{user.username}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-4">
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">Email</h3>
            <p className="text-base">{user.email}</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">
              Member Since
            </h3>
            <p className="text-base">{new Date(user.joined).toDateString()}</p>
          </div>
        </div>

        <div className="pt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
