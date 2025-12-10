import { useEffect, useState } from 'react';

interface Student {
  id: number;
  name: string;
  age: number;
  email: string;
  class: string;
  teacherId: string;
}

export function StudentsTable() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
    
  useEffect(() => {
    const fetchStudents = async () => {
    fetch(`${BASE_URL}/students`,{
        headers: {
            'ngrok-skip-browser-warning': 'true', 
        }
    }) 
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch students')
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      }).finally(() => {
        setLoading(false);
      });
    };
    fetchStudents();
}, []);

  
  const deleteStudent = (id: number) => {
    fetch(`${BASE_URL}/students/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to delete student');
        }
        setStudents(students.filter((student) => student.id !== id));
      })
      .catch((err) => {
        setError(err.message);
      }).finally(() => {
        setLoading(false);
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Students List
      </h2>
      <div className="overflow-hidden shadow-xl sm:rounded-lg border border-gray-200">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-500 to-purple-600">
            <tr>
              <th className="px-6 py-4 font-bold tracking-wider">ID</th>
              <th className="px-6 py-4 font-bold tracking-wider">Name</th>
              <th className="px-6 py-4 font-bold tracking-wider">Age</th>
              <th className="px-6 py-4 font-bold tracking-wider">Email</th>
              <th className="px-6 py-4 font-bold tracking-wider">Class</th>
              <th className="px-6 py-4 font-bold tracking-wider">Teacher ID</th>
              <th className="px-6 py-4 font-bold tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr 
                key={student.id} 
                className="hover:bg-blue-50 transition-colors duration-200 even:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{student.id}</td>
                <td className="px-6 py-4 font-medium text-gray-800">{student.name}</td>
                <td className="px-6 py-4">{student.age}</td>
                <td className="px-6 py-4 text-blue-600">{student.email}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                    {student.class}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs text-gray-400 font-mono">{student.teacherId}</td>
                <td className="px-6 py-4">
                  <button 
                    onClick={() => deleteStudent(student.id)}
                    className="px-3 py-1 text-xs font-medium text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors duration-200 shadow-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
