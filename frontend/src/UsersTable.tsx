import { useEffect, useState } from 'react';
import { useAuth } from './context/AuthContext';


interface User {
  id: string;
  name: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  email: string;
  phone: string;
  bio: string;
  role: string;
}

export function UsersTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { accessToken } = useAuth();
  const API_URL = import.meta.env.VITE_BASE_URL || 'https://setup-production-c651.up.railway.app';

    
  useEffect(() => {
    const fetchusers = async () => {
    fetch(`${API_URL}/users`,{

        headers: {
            'ngrok-skip-browser-warning': 'true', 
            'Authorization': `Bearer ${accessToken}`
        }
    }) 
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch users')
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      }).finally(() => {
        setLoading(false);
      });
    };
    fetchusers();
}, [accessToken, API_URL]);


  
  const deleteUser = (id: string) => {
    fetch(`${API_URL}/users/${id}`, {

      method: 'DELETE',
      headers: {
          'Authorization': `Bearer ${accessToken}`
      }
    })

      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to delete user');
        }
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((err) => {
        setError(err.message);
      }).finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div 
        className="
          animate-spin 
          rounded-full 
          h-16 w-16 
          border-t-4 
          border-b-4 
          border-blue-500
        "
      ></div>
      {/* Optional: Add text beneath the spinner */}
      <p className="ml-3 text-lg text-gray-700">Loading users...</p>
    </div>
  );
}
 // Before: if (error) return <div>Error: {error}</div>;

if (error) {
  return (
    // Centers the error message on the screen
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div 
        className="
          p-6 
          max-w-md 
          w-full 
          bg-white 
          rounded-lg 
          shadow-xl 
          border-l-4 
          border-red-500 
          text-red-800
        "
      >
        <h3 className="text-xl font-bold mb-2 flex items-center">
          {/* Icon for visual alert */}
          <svg 
            className="w-6 h-6 mr-2 text-red-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.398 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
          Data Fetch Error
        </h3>
        <p className="text-sm">
          **Details:** {error}
        </p>
        <p className="mt-3 text-xs text-gray-500">
          Please check your API connection and try again.
        </p>
      </div>
    </div>
  );
}

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        users List
      </h2>
      <div className="overflow-hidden shadow-xl sm:rounded-lg border border-gray-200">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-500 to-purple-600">
            <tr>
              <th className="px-6 py-4 font-bold tracking-wider">ID</th>
              <th className="px-6 py-4 font-bold tracking-wider">Name</th>
              <th className="px-6 py-4 font-bold tracking-wider">createdAt</th>
              <th className="px-6 py-4 font-bold tracking-wider">Email</th>
              
              <th className="px-6 py-4 font-bold tracking-wider">Role</th>
              <th className="px-6 py-4 font-bold tracking-wider">Actions</th>
              <th className="px-6 py-4 font-bold tracking-wider">Bio</th>
              <th className="px-6 py-4 font-bold tracking-wider">Phone</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr 
                key={user.id} 
                className="hover:bg-blue-50 transition-colors duration-200 even:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{user.id}</td>
                <td className="px-6 py-4 font-medium text-gray-800">{user.name}</td>
                <td className="px-6 py-4">{user.createdAt}</td>
                <td className="px-6 py-4 text-blue-600">{user.email}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button 
                    onClick={() => deleteUser(user.id)}
                    className="px-3 py-1 text-xs font-medium text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors duration-200 shadow-sm"
                  >
                    Delete
                  </button>
                </td>
                <td className="px-6 py-4 text-blue-600">{user.bio}</td>
                <td className="px-6 py-4 text-blue-600">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
