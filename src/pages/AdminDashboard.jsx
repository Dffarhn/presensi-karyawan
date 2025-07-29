import React, { useState } from "react";
import {
  Users,
  Plus,
  Upload,
  Download,
  Search,
  Edit,
  Trash2,
  Clock,
  Calendar,
  CheckCircle,
  Settings,
  User,
  Building2,
  Mail,
  Phone,
  X,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("employees");
  const [searchTerm, setSearchTerm] = useState("");

  // Modal states
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [showHolidayModal, setShowHolidayModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [modalType, setModalType] = useState("add"); // 'add' or 'edit'

  // Dummy data
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@company.com",
      department: "IT",
      position: "Developer",
      status: "aktif",
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@company.com",
      department: "HR",
      position: "Manager",
      status: "aktif",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@company.com",
      department: "Sales",
      position: "Representative",
      status: "tidak aktif",
    },
    {
      id: 4,
      name: "Lisa Wang",
      email: "lisa@company.com",
      department: "Finance",
      position: "Analyst",
      status: "aktif",
    },
    {
      id: 5,
      name: "David Kim",
      email: "david@company.com",
      department: "Marketing",
      position: "Specialist",
      status: "aktif",
    },
  ]);

  const [attendanceRecords, setAttendanceRecords] = useState([
    {
      id: 1,
      employee: "John Doe",
      date: new Date().toISOString().split('T')[0],
      checkIn: "08:30",
      checkOut: "17:30",
      status: "hadir",
    },
    {
      id: 2,
      employee: "Sarah Smith",
      date: new Date().toISOString().split('T')[0],
      checkIn: "08:45",
      checkOut: "17:15",
      status: "telat",
    },
    {
      id: 3,
      employee: "Mike Johnson",
      date: new Date().toISOString().split('T')[0],
      checkIn: "09:15",
      checkOut: "17:00",
      status: "telat",
    },
    {
      id: 4,
      employee: "Lisa Wang",
      date: new Date().toISOString().split('T')[0],
      checkIn: "08:00",
      checkOut: "17:45",
      status: "tidak masuk",
    },
    {
      id: 5,
      employee: "David Kim",
      date: new Date().toISOString().split('T')[0],
      checkIn: "08:30",
      checkOut: "17:30",
      status: "hadir",
    },
    // Data kehadiran untuk hari kemarin
    {
      id: 6,
      employee: "John Doe",
      date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      checkIn: "08:25",
      checkOut: "17:35",
      status: "hadir",
    },
    {
      id: 7,
      employee: "Sarah Smith",
      date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      checkIn: "08:30",
      checkOut: "17:30",
      status: "hadir",
    },
  ]);

  const [holidays, setHolidays] = useState([
    { id: 1, name: "Tahun Baru", date: "2024-01-01", type: "Libur Nasional" },
    {
      id: 2,
      name: "Hari Kemerdekaan",
      date: "2024-08-17",
      type: "Libur Nasional",
    },
    { id: 3, name: "Natal", date: "2024-12-25", type: "Libur Nasional" },
    {
      id: 4,
      name: "Hari Jadi Perusahaan",
      date: "2024-06-15",
      type: "Libur Perusahaan",
    },
  ]);

  const stats = [
    {
      title: "Total Karyawan",
      value: employees.length.toString(),
      icon: Users,
      color: "blue",
    },
    {
      title: "Karyawan Aktif",
      value: employees
        .filter((emp) => emp.status === "aktif")
        .length.toString(),
      icon: CheckCircle,
      color: "green",
    },
    {
      title: "Kehadiran Hari Ini",
      value: "89%",
      icon: Calendar,
      color: "purple",
    },
    { title: "Total Departemen", value: "8", icon: Building2, color: "indigo" },
  ];

  // Chart data - Weekly attendance trend
  const weeklyAttendanceData = [
    { day: "Sen", telat: 11, tidakMasuk: 5, total: 156 },
    { day: "Sel", telat: 8, tidakMasuk: 4, total: 156 },
    { day: "Rab", telat: 14, tidakMasuk: 6, total: 156 },
    { day: "Kam", telat: 6, tidakMasuk: 3, total: 156 },
    { day: "Jum", telat: 9, tidakMasuk: 4, total: 156 },
    { day: "Sab", telat: 16, tidakMasuk: 9, total: 156 },
    { day: "Min", telat: 18, tidakMasuk: 10, total: 156 },
  ];

  const departmentData = [
    { department: "IT", count: 45, color: "#3B82F6" },
    { department: "HR", count: 25, color: "#8B5CF6" },
    { department: "Sales", count: 35, color: "#06B6D4" },
    { department: "Finance", count: 28, color: "#84CC16" },
    { department: "Marketing", count: 23, color: "#F97316" },
  ];

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Form states
  const [employeeForm, setEmployeeForm] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
    status: "aktif",
  });

  const [attendanceForm, setAttendanceForm] = useState({
    employee: "",
    date: "",
    checkIn: "",
    checkOut: "",
    status: "hadir",
  });

  const [holidayForm, setHolidayForm] = useState({
    name: "",
    date: "",
    type: "Libur Nasional",
  });

  // Custom tooltip for attendance trend chart
  const CustomAttendanceTrendTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{`Hari: ${label}`}</p>
          <p className="text-sm text-yellow-600">{`Telat: ${
            payload[0]?.value || 0
          }`}</p>
          <p className="text-sm text-red-600">{`Tidak Masuk: ${
            payload[1]?.value || 0
          }`}</p>
          <p className="text-sm text-gray-600">{`Total: ${
            payload[0]?.value + payload[1]?.value || 0
          }`}</p>
        </div>
      );
    }
    return null;
  };

  // Custom tooltip for department chart
  const CustomDepartmentTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{`Departemen: ${payload[0].name}`}</p>
          <p className="text-sm text-gray-600">{`Jumlah: ${payload[0].value} karyawan`}</p>
        </div>
      );
    }
    return null;
  };

  // Modal handlers
  const openEmployeeModal = (type, item = null) => {
    setModalType(type);
    if (type === "edit" && item) {
      setEditingItem(item);
      setEmployeeForm(item);
    } else {
      setEditingItem(null);
      setEmployeeForm({
        name: "",
        email: "",
        department: "",
        position: "",
        status: "aktif",
      });
    }
    setShowEmployeeModal(true);
  };

  const openAttendanceModal = (type, item = null) => {
    setModalType(type);
    if (type === "edit" && item) {
      setEditingItem(item);
      setAttendanceForm(item);
    } else {
      setEditingItem(null);
      setAttendanceForm({
        employee: "",
        date: "",
        checkIn: "",
        checkOut: "",
        status: "hadir",
      });
    }
    setShowAttendanceModal(true);
  };

  const openHolidayModal = (type, item = null) => {
    setModalType(type);
    if (type === "edit" && item) {
      setEditingItem(item);
      setHolidayForm(item);
    } else {
      setEditingItem(null);
      setHolidayForm({ name: "", date: "", type: "Libur Nasional" });
    }
    setShowHolidayModal(true);
  };

  // Form handlers
  const handleEmployeeSubmit = (e) => {
    e.preventDefault();
    if (modalType === "add") {
      const newEmployee = {
        id: Math.max(...employees.map((emp) => emp.id)) + 1,
        ...employeeForm,
      };
      setEmployees([...employees, newEmployee]);
    } else {
      setEmployees(
        employees.map((emp) =>
          emp.id === editingItem.id ? { ...emp, ...employeeForm } : emp
        )
      );
    }
    setShowEmployeeModal(false);
  };

  const handleAttendanceSubmit = (e) => {
    e.preventDefault();
    if (modalType === "add") {
      const newAttendance = {
        id: Math.max(...attendanceRecords.map((att) => att.id)) + 1,
        ...attendanceForm,
      };
      setAttendanceRecords([...attendanceRecords, newAttendance]);
    } else {
      setAttendanceRecords(
        attendanceRecords.map((att) =>
          att.id === editingItem.id ? { ...att, ...attendanceForm } : att
        )
      );
    }
    setShowAttendanceModal(false);
  };

  const handleHolidaySubmit = (e) => {
    e.preventDefault();
    if (modalType === "add") {
      const newHoliday = {
        id: Math.max(...holidays.map((hol) => hol.id)) + 1,
        ...holidayForm,
      };
      setHolidays([...holidays, newHoliday]);
    } else {
      setHolidays(
        holidays.map((hol) =>
          hol.id === editingItem.id ? { ...hol, ...holidayForm } : hol
        )
      );
    }
    setShowHolidayModal(false);
  };

  // Delete handlers
  const deleteEmployee = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus karyawan ini?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  const deleteAttendance = (id) => {
    if (
      window.confirm("Apakah Anda yakin ingin menghapus catatan kehadiran ini?")
    ) {
      setAttendanceRecords(attendanceRecords.filter((att) => att.id !== id));
    }
  };

  const deleteHoliday = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus libur ini?")) {
      setHolidays(holidays.filter((hol) => hol.id !== id));
    }
  };

  return (
    <div className="space-y-4 px-4 sm:space-y-6 sm:px-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Dashboard Admin
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Manajemen karyawan dan kehadiran
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <button
            onClick={() => openEmployeeModal("add")}
            className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Plus className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Tambah Karyawan</span>
            <span className="sm:hidden">Tambah</span>
          </button>
          <button className="flex items-center justify-center px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            <Upload className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Impor</span>
            <span className="sm:hidden">Import</span>
          </button>
        </div>
      </div>
      <div className="space-y-4 sm:space-y-6">
        {/* Mobile Layout: Column order */}
        <div className="lg:hidden space-y-4 sm:space-y-6">
          {/* 1. Attendance Trend Chart - Mobile */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
              <h3 className="text-lg font-semibold text-gray-900">
                Trend Absen
              </h3>
              <div className="text-sm text-gray-500">7 hari terakhir</div>
            </div>
            <div className="w-full overflow-x-auto">
              <div className="min-w-[320px] sm:min-w-[400px]">
                <ResponsiveContainer
                  width="100%"
                  height={200}
                  className="sm:h-[250px]"
                >
                  <BarChart
                    data={weeklyAttendanceData}
                    margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis
                      dataKey="day"
                      tick={{ fontSize: 10, fill: "#6B7280" }}
                      axisLine={{ stroke: "#E5E7EB" }}
                      tickLine={{ stroke: "#E5E7EB" }}
                    />
                    <YAxis
                      tick={{ fontSize: 10, fill: "#6B7280" }}
                      axisLine={{ stroke: "#E5E7EB" }}
                      tickLine={{ stroke: "#E5E7EB" }}
                    />
                    <Tooltip content={<CustomAttendanceTrendTooltip />} />
                    <Bar
                      dataKey="telat"
                      stackId="a"
                      fill="#F59E0B"
                      radius={[0, 0, 4, 4]}
                    />
                    <Bar
                      dataKey="tidakMasuk"
                      stackId="a"
                      fill="#EF4444"
                      radius={[0, 0, 4, 4]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-sm text-gray-600">Telat</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-sm text-gray-600">Tidak Masuk</span>
              </div>
            </div>
          </div>

          {/* 2. Stats Cards - Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-600 truncate">
                        {stat.title}
                      </p>
                      <p className="text-xl sm:text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                    <div
                      className={`p-2 sm:p-3 rounded-lg bg-${stat.color}-100 flex-shrink-0`}
                    >
                      <Icon
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-${stat.color}-600`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. Department Distribution Chart - Mobile */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
              <h3 className="text-lg font-semibold text-gray-900">
                Distribusi Karyawan per Departemen
              </h3>
              <div className="text-sm text-gray-500">Total: 156 karyawan</div>
            </div>
            <ResponsiveContainer
              width="100%"
              height={200}
              className="sm:h-[250px]"
            >
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  paddingAngle={3}
                  dataKey="count"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomDepartmentTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {departmentData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600 truncate">
                    {item.department}
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    ({item.count})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout: Original structure */}
        <div className="hidden lg:block space-y-4 sm:space-y-6">
          {/* Charts Section - Side by side on desktop */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {/* Attendance Trend Chart */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  Trend Kehadiran Mingguan
                </h3>
                <div className="text-sm text-gray-500">7 hari terakhir</div>
              </div>
              <div className="w-full overflow-x-auto">
                <div className="min-w-[320px] sm:min-w-[400px]">
                  <ResponsiveContainer
                    width="100%"
                    height={200}
                    className="sm:h-[250px]"
                  >
                    <BarChart
                      data={weeklyAttendanceData}
                      margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis
                        dataKey="day"
                        tick={{ fontSize: 10, fill: "#6B7280" }}
                        axisLine={{ stroke: "#E5E7EB" }}
                        tickLine={{ stroke: "#E5E7EB" }}
                      />
                      <YAxis
                        tick={{ fontSize: 10, fill: "#6B7280" }}
                        axisLine={{ stroke: "#E5E7EB" }}
                        tickLine={{ stroke: "#E5E7EB" }}
                      />
                      <Tooltip content={<CustomAttendanceTrendTooltip />} />
                      <Bar
                        dataKey="telat"
                        stackId="a"
                        fill="#F59E0B"
                        radius={[0, 0, 4, 4]}
                      />
                      <Bar
                        dataKey="tidakMasuk"
                        stackId="a"
                        fill="#EF4444"
                        radius={[0, 0, 4, 4]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm text-gray-600">Telat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm text-gray-600">Tidak Masuk</span>
                </div>
              </div>
            </div>

            {/* Department Distribution Chart */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  Distribusi Karyawan per Departemen
                </h3>
                <div className="text-sm text-gray-500">Total: 156 karyawan</div>
              </div>
              <ResponsiveContainer
                width="100%"
                height={200}
                className="sm:h-[250px]"
              >
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={60}
                    paddingAngle={3}
                    dataKey="count"
                    stroke="#FFFFFF"
                    strokeWidth={2}
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomDepartmentTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {departmentData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-gray-600 truncate">
                      {item.department}
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      ({item.count})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-600 truncate">
                        {stat.title}
                      </p>
                      <p className="text-xl sm:text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                    <div
                      className={`p-2 sm:p-3 rounded-lg bg-${stat.color}-100 flex-shrink-0`}
                    >
                      <Icon
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-${stat.color}-600`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto px-4 sm:px-6">
            {[
              {
                id: "employees",
                name: "Manajemen Karyawan",
                icon: Users,
                shortName: "Karyawan",
              },
              {
                id: "attendance",
                name: "Catatan Kehadiran",
                icon: Clock,
                shortName: "Kehadiran",
              },
              {
                id: "holidays",
                name: "Manajemen Libur",
                icon: Calendar,
                shortName: "Libur",
              },
              {
                id: "settings",
                name: "Pengaturan",
                icon: Settings,
                shortName: "Setting",
              },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-3 border-b-2 font-medium text-sm whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">{tab.name}</span>
                  <span className="sm:hidden">{tab.shortName}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 sm:p-6">
          {/* Employee Management Tab */}
          {activeTab === "employees" && (
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-3 sm:space-y-0">
                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Cari karyawan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <button
                    onClick={() => openEmployeeModal("add")}
                    className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Tambah Karyawan</span>
                    <span className="sm:hidden">Tambah</span>
                  </button>
                  <button className="flex items-center justify-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Ekspor</span>
                    <span className="sm:hidden">Export</span>
                  </button>
                </div>
              </div>

              {/* Table View for All Screen Sizes */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Karyawan
                      </th>
                      <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Kehadiran Hari Ini
                      </th>
                      <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Departemen
                      </th>
                      <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Jabatan
                      </th>
                      <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredEmployees.map((employee) => {
                      // Get today's attendance for this employee
                      const today = new Date().toISOString().split('T')[0];
                      const todayAttendance = attendanceRecords.find(
                        record => record.employee === employee.name && record.date === today
                      );
                      
                      return (
                        <tr
                          key={employee.id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-2 sm:px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                              </div>
                              <div className="ml-2 sm:ml-4 min-w-0 flex-1">
                                <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                                  {employee.name}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-500 truncate">
                                  {employee.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-2 sm:px-4 py-4 whitespace-nowrap">
                            {todayAttendance ? (
                              <div className="flex flex-col">
                                <span
                                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mb-1 ${
                                    todayAttendance.status === "hadir"
                                      ? "bg-green-100 text-green-800"
                                      : todayAttendance.status === "telat"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {todayAttendance.status}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {todayAttendance.checkIn} - {todayAttendance.checkOut}
                                </span>
                              </div>
                            ) : (
                              <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                                Belum Hadir
                              </span>
                            )}
                          </td>
                          <td className="px-2 sm:px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mr-1 sm:mr-2 flex-shrink-0" />
                              <span className="text-xs sm:text-sm text-gray-900 truncate">
                                {employee.department}
                              </span>
                            </div>
                          </td>
                          <td className="px-2 sm:px-4 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 truncate">
                            {employee.position}
                          </td>
                          <td className="px-2 sm:px-4 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                employee.status === "aktif"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {employee.status}
                            </span>
                          </td>
                          <td className="px-2 sm:px-4 py-4 whitespace-nowrap text-xs sm:text-sm font-medium">
                            <div className="flex space-x-1 sm:space-x-2">
                              <button
                                onClick={() =>
                                  openEmployeeModal("edit", employee)
                                }
                                className="text-blue-600 hover:text-blue-900 p-1"
                              >
                                <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                              <button
                                onClick={() => deleteEmployee(employee.id)}
                                className="text-red-600 hover:text-red-900 p-1"
                              >
                                <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Attendance Records Tab */}
          {activeTab === "attendance" && (
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-3 sm:space-y-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  Catatan Kehadiran
                </h3>
                <button
                  onClick={() => openAttendanceModal("add")}
                  className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Tambah Catatan
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Karyawan
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tanggal
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Masuk
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Keluar
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {attendanceRecords.map((record) => (
                      <tr
                        key={record.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 truncate">
                          {record.employee}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record.date}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          {record.checkIn}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          {record.checkOut}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              record.status === "hadir"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {record.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() =>
                                openAttendanceModal("edit", record)
                              }
                              className="text-blue-600 hover:text-blue-900 p-1"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteAttendance(record.id)}
                              className="text-red-600 hover:text-red-900 p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Holiday Management Tab */}
          {activeTab === "holidays" && (
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-3 sm:space-y-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  Manajemen Libur
                </h3>
                <button
                  onClick={() => openHolidayModal("add")}
                  className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Tambah Libur
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {holidays.map((holiday) => (
                  <div
                    key={holiday.id}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                  >
                    <div className="flex justify-between items-start">
                      <div className="min-w-0 flex-1">
                        <h4 className="font-medium text-gray-900 text-base truncate">
                          {holiday.name}
                        </h4>
                        <p className="text-sm text-gray-600">{holiday.date}</p>
                        <p className="text-xs text-gray-500">{holiday.type}</p>
                      </div>
                      <div className="flex space-x-1 ml-2">
                        <button
                          onClick={() => openHolidayModal("edit", holiday)}
                          className="text-blue-600 hover:text-blue-900 p-1"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteHoliday(holiday.id)}
                          className="text-red-600 hover:text-red-900 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Pengaturan Integrasi
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Mail className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-medium text-gray-900 text-base">
                      Notifikasi Email
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Konfigurasi pengaturan notifikasi email
                  </p>
                  <button className="px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                    Konfigurasi
                  </button>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Phone className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="font-medium text-gray-900 text-base">
                      Notifikasi SMS
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Konfigurasi pengaturan notifikasi SMS
                  </p>
                  <button className="px-3 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                    Konfigurasi
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Employee Modal */}
      {showEmployeeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {modalType === "add" ? "Tambah Karyawan" : "Edit Karyawan"}
              </h3>
              <button
                onClick={() => setShowEmployeeModal(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleEmployeeSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  value={employeeForm.name}
                  onChange={(e) =>
                    setEmployeeForm({ ...employeeForm, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={employeeForm.email}
                  onChange={(e) =>
                    setEmployeeForm({ ...employeeForm, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Departemen
                </label>
                <select
                  value={employeeForm.department}
                  onChange={(e) =>
                    setEmployeeForm({
                      ...employeeForm,
                      department: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                >
                  <option value="">Pilih Departemen</option>
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="Sales">Sales</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Jabatan
                </label>
                <input
                  type="text"
                  value={employeeForm.position}
                  onChange={(e) =>
                    setEmployeeForm({
                      ...employeeForm,
                      position: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  value={employeeForm.status}
                  onChange={(e) =>
                    setEmployeeForm({ ...employeeForm, status: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                >
                  <option value="aktif">Aktif</option>
                  <option value="tidak aktif">Tidak Aktif</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  {modalType === "add"
                    ? "Tambah Karyawan"
                    : "Perbarui Karyawan"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowEmployeeModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Attendance Modal */}
      {showAttendanceModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {modalType === "add"
                  ? "Tambah Catatan Kehadiran"
                  : "Edit Catatan Kehadiran"}
              </h3>
              <button
                onClick={() => setShowAttendanceModal(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAttendanceSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Karyawan
                </label>
                <select
                  value={attendanceForm.employee}
                  onChange={(e) =>
                    setAttendanceForm({
                      ...attendanceForm,
                      employee: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                >
                  <option value="">Pilih Karyawan</option>
                  {employees.map((emp) => (
                    <option key={emp.id} value={emp.name}>
                      {emp.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tanggal
                </label>
                <input
                  type="date"
                  value={attendanceForm.date}
                  onChange={(e) =>
                    setAttendanceForm({
                      ...attendanceForm,
                      date: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Masuk
                  </label>
                  <input
                    type="time"
                    value={attendanceForm.checkIn}
                    onChange={(e) =>
                      setAttendanceForm({
                        ...attendanceForm,
                        checkIn: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Keluar
                  </label>
                  <input
                    type="time"
                    value={attendanceForm.checkOut}
                    onChange={(e) =>
                      setAttendanceForm({
                        ...attendanceForm,
                        checkOut: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  value={attendanceForm.status}
                  onChange={(e) =>
                    setAttendanceForm({
                      ...attendanceForm,
                      status: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                >
                  <option value="hadir">Hadir</option>
                  <option value="telat">Telat</option>
                  <option value="tidak hadir">Tidak Hadir</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  {modalType === "add" ? "Tambah Catatan" : "Perbarui Catatan"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowAttendanceModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Holiday Modal */}
      {showHolidayModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {modalType === "add" ? "Tambah Libur" : "Edit Libur"}
              </h3>
              <button
                onClick={() => setShowHolidayModal(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleHolidaySubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Libur
                </label>
                <input
                  type="text"
                  value={holidayForm.name}
                  onChange={(e) =>
                    setHolidayForm({ ...holidayForm, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tanggal
                </label>
                <input
                  type="date"
                  value={holidayForm.date}
                  onChange={(e) =>
                    setHolidayForm({ ...holidayForm, date: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Jenis
                </label>
                <select
                  value={holidayForm.type}
                  onChange={(e) =>
                    setHolidayForm({ ...holidayForm, type: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                >
                  <option value="Libur Nasional">Libur Nasional</option>
                  <option value="Libur Perusahaan">Libur Perusahaan</option>
                  <option value="Libur Keagamaan">Libur Keagamaan</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  {modalType === "add" ? "Tambah Libur" : "Perbarui Libur"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowHolidayModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
