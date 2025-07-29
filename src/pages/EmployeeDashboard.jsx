import React, { useState } from "react";
import {
  User,
  Clock,
  Calendar,
  TrendingUp,
  Settings,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Plus,
  Download,
  Mail,
  Phone,
  MapPin,
  Building2,
  Award,
  BarChart3,
  FileText,
  Flame,
  Target,
} from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const EmployeeDashboard = ({
  user = {
    name: "John Doe",
    department: "Engineering",
    email: "john.doe@company.com",
  },
}) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy data
  const personalStats = [
    {
      title: "Total Hari Hadir",
      value: "27",
      change: "+2",
      icon: CheckCircle,
      color: "green",
    },
    {
      title: "Hari Tidak Hadir",
      value: "3",
      change: "-1",
      icon: XCircle,
      color: "red",
    },
    {
      title: "Hari Terlambat",
      value: "5",
      change: "+1",
      icon: AlertTriangle,
      color: "yellow",
    },
    {
      title: "Tingkat Kehadiran",
      value: "90%",
      change: "+0.5%",
      icon: TrendingUp,
      color: "blue",
    },
  ];

  const attendanceHistory = [
    {
      date: "2024-01-15",
      checkIn: "08:30",
      checkOut: "17:30",
      status: "hadir",
      hours: "9j",
    },
    {
      date: "2024-01-14",
      checkIn: "08:45",
      checkOut: "17:15",
      status: "terlambat",
      hours: "8.5j",
    },
    {
      date: "2024-01-13",
      checkIn: "08:00",
      checkOut: "17:45",
      status: "hadir",
      hours: "9.75j",
    },
    {
      date: "2024-01-12",
      checkIn: "09:15",
      checkOut: "17:00",
      status: "terlambat",
      hours: "7.75j",
    },
    {
      date: "2024-01-11",
      checkIn: "08:30",
      checkOut: "17:30",
      status: "hadir",
      hours: "9j",
    },
    {
      date: "2024-01-10",
      checkIn: "08:30",
      checkOut: "17:30",
      status: "hadir",
      hours: "9j",
    },
  ];

  const punctualityTrend = [
    { month: "Jan", onTime: 18, late: 2, absent: 0 },
    { month: "Des", onTime: 20, late: 1, absent: 0 },
    { month: "Nov", onTime: 19, late: 1, absent: 1 },
    { month: "Okt", onTime: 21, late: 0, absent: 0 },
  ];

  const currentStatus = {
    status: "online",
    lastCheckIn: "08:30 AM",
    currentTime: "14:30 PM",
    location: "Gedung Kantor A, Lantai 3",
  };

  const streakData = {
    currentPresentStreak: 10,
    longestPresentStreak: 15,
    currentPunctualStreak: 8,
    longestPunctualStreak: 12,
  };

  const monthlyComposition = [
    { name: "Hadir", value: 18, color: "#4CAF50" },
    { name: "Terlambat", value: 2, color: "#FFC107" },
    { name: "Tidak Hadir", value: 0, color: "#F44336" },
  ];

  const attendanceTrend = [
    { present: 1, late: 0, absent: 0 }, // Senin
    { present: 1, late: 0, absent: 0 }, // Selasa
    { present: 1, late: 0, absent: 0 }, // Rabu
    { present: 1, late: 0, absent: 0 }, // Kamis
    { present: 1, late: 0, absent: 0 }, // Jumat
    { present: 0, late: 0, absent: 1 }, // Sabtu
    { present: 0, late: 0, absent: 1 }, // Minggu
  ];

  const stats = [
    {
      title: "Total Kehadiran",
      value: "27/3 = 9",
      icon: Calendar,
      color: "blue",
    },
    {
      title: "Kehadiran Hari Ini",
      value: "Hadir",
      icon: CheckCircle,
      color: "green",
    },
    { title: "Jam Kerja", value: "8h 30m", icon: Clock, color: "purple" },
    { title: "Status", value: "Aktif", icon: User, color: "indigo" },
  ];

  return (
    <div className="space-y-2 sm:space-y-6 px-1 sm:px-0 overflow-x-hidden w-full max-w-full">
      {/* Header dengan Status Saat Ini */}
      {/* Header dengan Status Saat Ini */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          {/* Kiri: User Info */}
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-md">
              <User className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>

            {/* Info User */}
            <div className="flex-1 min-w-0">
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900 truncate">
                {user.name}
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                {user.department}
              </p>

              {/* Email & Status */}
              <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-2">
                <p className="text-xs sm:text-sm text-gray-500 truncate">
                  {user.email}
                </p>
                <div className="flex items-center">
                  <span
                    className={`w-3 h-3 rounded-full mr-2 ${
                      currentStatus.status === "online"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  ></span>
                  <span className="text-sm text-gray-700 capitalize font-medium">
                    {currentStatus.status}
                  </span>
                </div>
              </div>

              {/* Check-in */}
              <p className="mt-2 text-xs text-gray-500">
                ✅ Check-in:{" "}
                <span className="font-medium">{currentStatus.lastCheckIn}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Kartu Statistik */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-6">
        {personalStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white p-2 sm:p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">
                    {stat.title}
                  </p>
                  <p className="text-base sm:text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p
                    className={`text-xs sm:text-sm ${
                      stat.change.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.change} dari bulan lalu
                  </p>
                </div>
                <div
                  className={`p-1 sm:p-3 rounded-lg flex-shrink-0 ${
                    stat.color === "green"
                      ? "bg-green-100"
                      : stat.color === "red"
                      ? "bg-red-100"
                      : stat.color === "yellow"
                      ? "bg-yellow-100"
                      : "bg-blue-100"
                  }`}
                >
                  <Icon
                    className={`w-3 h-3 sm:w-6 sm:h-6 ${
                      stat.color === "green"
                        ? "text-green-600"
                        : stat.color === "red"
                        ? "text-red-600"
                        : stat.color === "yellow"
                        ? "text-yellow-600"
                        : "text-blue-600"
                    }`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tab */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto px-1 sm:px-6">
            {[
              { id: "overview", name: "Ringkasan & Analitik", icon: User },
              { id: "history", name: "Riwayat Kehadiran", icon: Clock },
              // { id: 'settings', name: 'Pengaturan', icon: Settings }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-2 sm:py-4 px-1 sm:px-4 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-2 sm:p-6">
          {/* Tab Ringkasan & Analitik */}
          {activeTab === "overview" && (
            <div className="space-y-3 sm:space-y-8">

                     {/* Bagian Grafik */}
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-6">
                {/* Grafik Pie - Komposisi Bulanan */}
                <div className="bg-white p-2 sm:p-6 border border-gray-200 rounded-xl">
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-4">
                    Komposisi Bulan Ini
                  </h3>
                  <div className="h-32 sm:h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={monthlyComposition}
                          cx="50%"
                          cy="50%"
                          outerRadius={window.innerWidth >= 1024 ? 100 : 60}
                          innerRadius={window.innerWidth >= 1024 ? 40 : 25}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}`}
                          labelLine={false}
                          fontSize={window.innerWidth >= 1024 ? 12 : 8}
                        >
                          {monthlyComposition.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-3 gap-1 sm:gap-4 mt-2 sm:mt-4">
                    {monthlyComposition.map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <div
                            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-1 sm:mr-2"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span className="text-xs sm:text-sm font-medium text-gray-900">
                            {item.value}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Wawasan Performa */}
                <div>
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-4">
                    Wawasan Performa
                  </h3>
                  <div className="space-y-1.5 sm:space-y-4">
                    <div className="bg-blue-50 p-1.5 sm:p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center mb-1 sm:mb-2">
                        <Award className="w-3 h-3 sm:w-5 sm:h-5 text-blue-600 mr-1 sm:mr-2" />
                        <h4 className="font-medium text-blue-900 text-xs sm:text-base">
                          Kehadiran Luar Biasa
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-blue-700">
                        Anda telah mempertahankan tingkat kehadiran 97.8% bulan
                        ini!
                      </p>
                    </div>

                    <div className="bg-green-50 p-1.5 sm:p-4 rounded-lg border border-green-200">
                      <div className="flex items-center mb-1 sm:mb-2">
                        <TrendingUp className="w-3 h-3 sm:w-5 sm:h-5 text-green-600 mr-1 sm:mr-2" />
                        <h4 className="font-medium text-green-900 text-xs sm:text-base">
                          Ketepatan Waktu Meningkat
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-green-700">
                        Ketepatan waktu Anda meningkat 15% dibanding bulan lalu.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-1.5 sm:p-4 rounded-lg border border-purple-200">
                      <div className="flex items-center mb-1 sm:mb-2">
                        <BarChart3 className="w-3 h-3 sm:w-5 sm:h-5 text-purple-600 mr-1 sm:mr-2" />
                        <h4 className="font-medium text-purple-900 text-xs sm:text-base">
                          Jam Kerja
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-purple-700">
                        Rata-rata jam kerja harian: 8.5 jam
                      </p>
                    </div>

                    <div className="bg-orange-50 p-1.5 sm:p-4 rounded-lg border border-orange-200">
                      <div className="flex items-center mb-1 sm:mb-2">
                        <Flame className="w-3 h-3 sm:w-5 sm:h-5 text-orange-600 mr-1 sm:mr-2" />
                        <h4 className="font-medium text-orange-900 text-xs sm:text-base">
                          Rekor Saat Ini
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-orange-700">
                        Anda sedang dalam rekor kehadiran{" "}
                        {streakData.currentPresentStreak} hari!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Kartu Streak */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-4">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 sm:p-6 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-green-100 text-xs sm:text-sm">
                        Rekor Hadir Saat Ini
                      </p>
                      <p className="text-lg sm:text-3xl font-bold">
                        {streakData.currentPresentStreak}
                      </p>
                      <p className="text-green-100 text-xs">
                        hari berturut-turut
                      </p>
                    </div>
                    <Flame className="w-4 h-4 sm:w-8 sm:h-8 text-green-200 flex-shrink-0" />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 sm:p-6 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-blue-100 text-xs sm:text-sm">
                        Rekor Hadir Terpanjang
                      </p>
                      <p className="text-lg sm:text-3xl font-bold">
                        {streakData.longestPresentStreak}
                      </p>
                      <p className="text-blue-100 text-xs">hari rekor</p>
                    </div>
                    <Target className="w-4 h-4 sm:w-8 sm:h-8 text-blue-200 flex-shrink-0" />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-2 sm:p-6 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-purple-100 text-xs sm:text-sm">
                        Rekor Tepat Waktu
                      </p>
                      <p className="text-lg sm:text-3xl font-bold">
                        {streakData.currentPunctualStreak}
                      </p>
                      <p className="text-purple-100 text-xs">
                        hari tepat waktu
                      </p>
                    </div>
                    <Clock className="w-4 h-4 sm:w-8 sm:h-8 text-purple-200 flex-shrink-0" />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 sm:p-6 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-orange-100 text-xs sm:text-sm">
                        Rekor Tepat Waktu Terbaik
                      </p>
                      <p className="text-lg sm:text-3xl font-bold">
                        {streakData.longestPunctualStreak}
                      </p>
                      <p className="text-orange-100 text-xs">hari rekor</p>
                    </div>
                    <Award className="w-4 h-4 sm:w-8 sm:h-8 text-orange-200 flex-shrink-0" />
                  </div>
                </div>
              </div>

       
            </div>
          )}

          {/* Tab Riwayat Kehadiran */}
          {activeTab === "history" && (
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 sm:mb-4 space-y-1.5 sm:space-y-0">
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
                  Riwayat Kehadiran
                </h3>
                <button className="flex items-center justify-center px-1.5 sm:px-3 py-1 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto text-xs sm:text-sm">
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Ekspor Riwayat
                </button>
              </div>
              {/* Kalender Kehadiran 1 Bulan */}
              <div className="bg-white p-2 sm:p-6 border border-gray-200 rounded-xl mb-4">
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-4">
                  Kalender Kehadiran Januari 2024
                </h3>
                <div className="grid grid-cols-7 gap-0 mb-2 sm:mb-4">
                  {/* Header */}
                  {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map(
                    (d, i) => (
                      <div
                        key={i}
                        className="text-center text-[10px] sm:text-xs font-medium text-gray-500 py-0.5 border border-gray-100 bg-gray-50"
                      >
                        {d}
                      </div>
                    )
                  )}
                  {/* Hari */}
                  {Array.from({ length: 31 }).map((_, i) => {
                    let status = "hadir";
                    if ((i + 1) % 7 === 6 || (i + 1) % 7 === 0)
                      status = "weekend";
                    if (i === 2 || i === 10) status = "terlambat";
                    if (i === 5 || i === 20) status = "tidak hadir";

                    return (
                      <div
                        key={i}
                        className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-[10px] sm:text-xs font-medium select-none
          ${status === "hadir" ? "bg-green-500 text-white" : ""}
          ${status === "terlambat" ? "bg-yellow-400 text-white" : ""}
          ${status === "tidak hadir" ? "bg-red-500 text-white" : ""}
          ${status === "weekend" ? "bg-gray-100 text-gray-400" : ""}
        `}
                      >
                        {i + 1}
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mt-2 sm:mt-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 sm:w-4 sm:h-4 bg-green-500 rounded mr-1 sm:mr-2"></div>
                    <span className="text-xs sm:text-sm text-gray-600">
                      Hadir
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 sm:w-4 sm:h-4 bg-yellow-400 rounded mr-1 sm:mr-2"></div>
                    <span className="text-xs sm:text-sm text-gray-600">
                      Terlambat
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 sm:w-4 sm:h-4 bg-red-500 rounded mr-1 sm:mr-2"></div>
                    <span className="text-xs sm:text-sm text-gray-600">
                      Tidak Hadir
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 sm:w-4 sm:h-4 bg-gray-100 border border-gray-300 rounded mr-1 sm:mr-2"></div>
                    <span className="text-xs sm:text-sm text-gray-600">
                      Akhir Pekan
                    </span>
                  </div>
                </div>
              </div>
              {/* Tabel Riwayat Kehadiran */}
              <div className="overflow-x-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                            Tanggal
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                            Check In
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                            Check Out
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                            Jam Kerja
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-100">
                        {attendanceHistory.map((record, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-50 transition-colors duration-150"
                          >
                            <td className="px-4 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                {record.date}
                              </div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 text-green-500 mr-2" />
                                <span className="text-sm font-medium text-gray-900">
                                  {record.checkIn}
                                </span>
                              </div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 text-red-500 mr-2" />
                                <span className="text-sm font-medium text-gray-900">
                                  {record.checkOut}
                                </span>
                              </div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                <span className="text-sm font-medium text-gray-900">
                                  {record.hours}
                                </span>
                              </div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <span
                                className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full shadow-sm ${
                                  record.status === "hadir"
                                    ? "bg-green-100 text-green-800 border border-green-200"
                                    : "bg-yellow-100 text-yellow-800 border border-yellow-200"
                                }`}
                              >
                                <div
                                  className={`w-2 h-2 rounded-full mr-2 ${
                                    record.status === "hadir"
                                      ? "bg-green-500"
                                      : "bg-yellow-500"
                                  }`}
                                ></div>
                                {record.status === "hadir" ? "Hadir" : "Telat"}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Pengaturan
          {activeTab === 'settings' && (
            <div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-4">Pengaturan Pribadi</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6">
                <div className="bg-gray-50 p-2 sm:p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-1.5 sm:mb-3">
                    <Mail className="w-3 h-3 sm:w-5 sm:h-5 text-blue-600 mr-1 sm:mr-2" />
                    <h4 className="font-medium text-gray-900 text-xs sm:text-base">Notifikasi Email</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1.5 sm:mb-3">Kelola preferensi notifikasi email Anda</p>
                  <button className="px-1.5 sm:px-3 py-1 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm rounded hover:bg-blue-700">
                    Konfigurasi
                  </button>
                </div>
                
                <div className="bg-gray-50 p-2 sm:p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-1.5 sm:mb-3">
                    <Phone className="w-3 h-3 sm:w-5 sm:h-5 text-green-600 mr-1 sm:mr-2" />
                    <h4 className="font-medium text-gray-900 text-xs sm:text-base">Notifikasi SMS</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1.5 sm:mb-3">Kelola preferensi notifikasi SMS Anda</p>
                  <button className="px-1.5 sm:px-3 py-1 sm:py-2 bg-green-600 text-white text-xs sm:text-sm rounded hover:bg-green-700">
                    Konfigurasi
                  </button>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
