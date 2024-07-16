import React, { useState, useEffect } from "react";
import { getUsers } from "../services/userService";

const AdminUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers();
        console.log(response);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-10 text-[#655050]">
      <h1 className="text-3xl font-semibold mb-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user._id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{user.fullname}</h2>
            {user.imageUrl ? (
              <img
                src={user.imageUrl}
                alt={user.fullname}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
            ) : (
              <h1 className="text-gray-700">No Image</h1>
            )}
            <p className="text-gray-700">
              <strong>ID</strong>: {user._id}
            </p>
            <p className="text-gray-700">
              <strong>Email</strong>: {user.email}
            </p>
            <p className="text-gray-700">
              <strong>FullName:</strong> {user.fullName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUser;
