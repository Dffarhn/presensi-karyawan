import React, { useState } from "react";
import {
  BarChart3,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Award,
  Building2,
  Calendar,
  FileText,
  Download,
  Eye,
} from "lucide-react";
import {
  LineChart,
  Line,
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

const ManagementDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  // Data dummy
  const stats = [
    {
      title: "Hadir Hari Ini",
      value: "142",
      change: "+1.2%",
      icon: CheckCircle,
      color: "green",
    },
    {
      title: "Tidak Hadir Hari Ini",
      value: "8",
      change: "-0.8%",
      icon: XCircle,
      color: "red",
    },
    {
      title: "Terlambat Hari Ini",
      value: "6",
      change: "+0.3%",
      icon: Clock,
      color: "yellow",
    },
    {
      title: "Total Karyawan",
      value: "156",
      change: "+2.5%",
      icon: Users,
      color: "blue",
    },
  ];

  const attendanceTrend = [
    { month: "Jan", present: 140, absent: 10, late: 6 },
    { month: "Feb", present: 138, absent: 12, late: 8 },
    { month: "Mar", present: 145, absent: 7, late: 4 },
    { month: "Apr", present: 150, absent: 4, late: 2 },
    { month: "Mei", present: 148, absent: 6, late: 3 },
    { month: "Jun", present: 142, absent: 8, late: 5 },
    { month: "Jul", present: 144, absent: 7, late: 5 },
  ];

  const todayPie = [
    { name: "Hadir", value: 142, color: "#22c55e" },
    { name: "Tidak Hadir", value: 8, color: "#ef4444" },
    { name: "Terlambat", value: 6, color: "#eab308" },
  ];

  const departmentData = [
    { name: "IT", present: 25, absent: 2, late: 1, total: 28 },
    { name: "HR", present: 18, absent: 1, late: 0, total: 19 },
    { name: "Keuangan", present: 22, absent: 2, late: 1, total: 25 },
    { name: "Pemasaran", present: 20, absent: 1, late: 2, total: 23 },
    { name: "Penjualan", present: 35, absent: 2, late: 2, total: 39 },
  ];

  const alerts = [
    {
      type: "warning",
      message: "Deteksi keterlambatan massal di departemen IT",
      time: "2 menit yang lalu",
    },
    {
      type: "info",
      message: "Laporan kehadiran bulanan siap untuk ditinjau",
      time: "1 jam yang lalu",
    },
    {
      type: "error",
      message: "Pola ketidakhadiran tidak biasa di tim Keuangan",
      time: "3 jam yang lalu",
    },
  ];

  const topPerformers = [
    {
      name: "Sarah Johnson",
      department: "IT",
      attendance: "98%",
      punctuality: "95%",
    },
    {
      name: "Mike Chen",
      department: "Penjualan",
      attendance: "97%",
      punctuality: "92%",
    },
    {
      name: "Lisa Wang",
      department: "HR",
      attendance: "96%",
      punctuality: "94%",
    },
    {
      name: "David Kim",
      department: "Keuangan",
      attendance: "95%",
      punctuality: "90%",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              Dashboard Manajemen
            </h1>
            <p className="text-gray-600">Ikhtisar analitik dan pelaporan</p>
          </div>
          <div className="flex space-x-3">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="today">Hari Ini</option>
              <option value="week">Minggu Ini</option>
              <option value="month">Bulan Ini</option>
            </select>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Ekspor Laporan
            </button>
          </div>
        </div>

        {/* Bagian Grafik */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Grafik Pie */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow border border-gray-100 flex flex-col items-center justify-center">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
              Komposisi Kehadiran Hari Ini
            </h3>
            <div className="w-full flex-1 min-h-[200px] sm:min-h-[180px] lg:min-h-[220px]">
              <ResponsiveContainer width="100%" height={200} className="sm:h-[180px] lg:h-[220px]">
                <PieChart>
                  <Pie
                    data={todayPie}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    className="sm:outerRadius-[70px] lg:outerRadius-[80px]"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {todayPie.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend 
                    layout="horizontal" 
                    verticalAlign="bottom" 
                    align="center"
                    wrapperStyle={{
                      fontSize: '12px',
                      paddingTop: '10px'
                    }}
                  />
                  <Tooltip 
                    formatter={(value, name) => [value, name]}
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Grafik Garis */}
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 col-span-2 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Tren Ketidakhadiran Bulanan
              </h3>
              <TrendingUp className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex-1 min-h-[220px]">
              <ResponsiveContainer width="100%" height={220}>
                <LineChart
                  data={attendanceTrend}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="absent"
                    stroke="#ef4444"
                    name="Tidak Hadir"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="late"
                    stroke="#eab308"
                    name="Terlambat"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Kartu Statistik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl shadow flex items-center gap-4 border border-gray-100"
              >
                <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                  <Icon className={`w-7 h-7 text-${stat.color}-600`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p
                    className={`text-sm ${
                      stat.change.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.change} dari kemarin
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Perbandingan Departemen & Peringatan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Perbandingan Departemen */}
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Kehadiran Departemen
              </h3>
              <Building2 className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {departmentData.map((dept, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{dept.name}</span>
                      <span className="text-gray-600">
                        {dept.present}/{dept.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{
                          width: `${(dept.present / dept.total) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Peringatan Real-time */}
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Peringatan Real-time
              </h3>
              <AlertTriangle className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border-l-4 ${
                    alert.type === "warning"
                      ? "border-yellow-400 bg-yellow-50"
                      : alert.type === "error"
                      ? "border-red-400 bg-red-50"
                      : "border-blue-400 bg-blue-50"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <p className="text-sm text-gray-700">{alert.message}</p>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wawasan Kinerja dan Penghargaan */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
          {/* Karyawan Terbaik */}
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Karyawan Terbaik
              </h3>
              <Award className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {topPerformers.map((performer, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-900">
                      {performer.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {performer.department}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600">
                      {performer.attendance} kehadiran
                    </p>
                    <p className="text-xs text-gray-500">
                      {performer.punctuality} ketepatan waktu
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementDashboard;
