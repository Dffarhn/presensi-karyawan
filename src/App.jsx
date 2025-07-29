import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layout Components
import Layout from './components/Layout/Layout'
import Header from './components/Layout/Header'

// Dashboard Components
import ManagementDashboard from './pages/ManagementDashboard'
import AdminDashboard from './pages/AdminDashboard'
import EmployeeDashboard from './pages/EmployeeDashboard'
import Home from './pages/Home'

function App() {
  // Dummy user untuk sidebar/header agar tidak error
  const managementUser = {
    id: 1,
    name: 'John Manager',
    role: 'management',
    email: 'manager@company.com',
    department: 'Management'
  }
  const adminUser = {
    id: 2,
    name: 'Sarah Admin',
    role: 'admin',
    email: 'admin@company.com',
    department: 'HR'
  }
  const employeeUser = {
    id: 3,
    name: 'Mike Employee',
    role: 'employee',
    email: 'employee@company.com',
    department: 'IT'
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 overflow-x-hidden w-full max-w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/management-dashboard" element={
            <Layout>
              <div className="flex-1 flex flex-col">
                <Header user={managementUser} />
                <main className="flex-1 p-2 sm:p-6">
                  <ManagementDashboard />
                </main>
              </div>
            </Layout>
          } />
          <Route path="/admin-dashboard" element={
            <Layout>
              <div className="flex-1 flex flex-col">
                <Header user={adminUser} />
                <main className="flex-1 p-2 sm:p-6">
                  <AdminDashboard />
                </main>
              </div>
            </Layout>
          } />
          <Route path="/employee-dashboard" element={
            <Layout>
              <div className="flex-1 flex flex-col">
                <Header user={employeeUser} />
                <main className="flex-1 p-2 sm:p-6">
                  <EmployeeDashboard user={employeeUser} />
                </main>
              </div>
            </Layout>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
