# Employee Attendance Management System

A comprehensive web-based employee attendance management system with three distinct dashboards for different user roles.

## Features

### 🎯 Management Dashboard
- **Daily Attendance Reports** - Individual and department-level reports
- **Monthly Summary** - Monthly statistics and attendance overview
- **Absence Tracking** - Detect absence patterns and anomalies
- **Real-time Monitoring Alerts** - Instant notifications for anomalies
- **Exception Reporting** - Identify data inconsistencies
- **Department Comparison Analytics** - Compare performance across departments
- **Employee Performance Insights** - Detailed performance statistics
- **Employee Awards** - Recognition based on attendance and punctuality

### 👨‍💼 Admin Dashboard
- **Employee Management** - Add, edit, and manage employee data
- **Attendance Records** - Manual attendance record management
- **Holiday Management** - Add and remove company holidays
- **Leave Approval** - Approve or reject leave requests
- **Integration Settings** - Email and SMS notification configuration
- **User Role Management** - Manage user permissions and roles
- **Performance Analytics** - Employee performance insights

### 👤 Employee Dashboard
- **Personal Statistics** - Individual attendance metrics
- **Status Tracking** - Real-time online/offline/late status
- **Attendance History** - Personal attendance records
- **Leave Request Integration** - Submit leave requests directly
- **Personal Analytics** - Individual punctuality trends
- **Settings** - Personal notification preferences

## Technology Stack

- **React 19** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and dev server

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dashboard-presensi
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Demo Login
The application includes a demo login system with three different user roles:

1. **Management Dashboard**
   - Email: Any email
   - Password: Any password
   - Role: Select "Management Dashboard"

2. **Admin Dashboard**
   - Email: Any email
   - Password: Any password
   - Role: Select "Admin Dashboard"

3. **Employee Dashboard**
   - Email: Any email
   - Password: Any password
   - Role: Select "Employee Dashboard"

### Navigation
- Use the sidebar to navigate between different sections
- Each dashboard has role-specific features and permissions
- The header shows user information and notifications
- Responsive design works on desktop and mobile devices

## Project Structure

```
src/
├── components/
│   └── Layout/
│       ├── Layout.jsx
│       ├── Sidebar.jsx
│       └── Header.jsx
├── pages/
│   ├── Login.jsx
│   ├── ManagementDashboard.jsx
│   ├── AdminDashboard.jsx
│   └── EmployeeDashboard.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Features Implemented

### ✅ Completed Features
- [x] Role-based authentication and routing
- [x] Three distinct dashboards (Management, Admin, Employee)
- [x] Responsive design with Tailwind CSS
- [x] Modern UI/UX with Lucide React icons
- [x] Dummy data for all features
- [x] Tabbed navigation within dashboards
- [x] Statistics cards and analytics
- [x] Data tables and forms
- [x] Real-time status indicators
- [x] Export functionality placeholders
- [x] Search and filter capabilities

### 🔄 Future Enhancements
- [ ] Backend API integration
- [ ] Real-time data updates
- [ ] Advanced charts and graphs
- [ ] File upload functionality
- [ ] Email/SMS integration
- [ ] Mobile app development
- [ ] Advanced reporting features

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- Uses functional components with hooks
- Modular component structure
- Consistent naming conventions
- Responsive design patterns
- Accessibility considerations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.
