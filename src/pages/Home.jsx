import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
      Employee Attendance System Demo
    </h1>
    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full max-w-md sm:max-w-none">
      <Link 
        to="/management-dashboard" 
        className="px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center text-sm sm:text-base"
      >
        Management Dashboard
      </Link>
      <Link 
        to="/admin-dashboard" 
        className="px-4 sm:px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors text-center text-sm sm:text-base"
      >
        Admin Dashboard
      </Link>
      <Link 
        to="/employee-dashboard" 
        className="px-4 sm:px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center text-sm sm:text-base"
      >
        Employee Dashboard
      </Link>
    </div>
  </div>
)

export default Home 