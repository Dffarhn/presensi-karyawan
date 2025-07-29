import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
    <h1 className="text-3xl font-bold mb-8">Employee Attendance System Demo</h1>
    <div className="space-x-4">
      <Link to="/management-dashboard" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Management Dashboard</Link>
      <Link to="/admin-dashboard" className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">Admin Dashboard</Link>
      <Link to="/employee-dashboard" className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">Employee Dashboard</Link>
    </div>
  </div>
)

export default Home 