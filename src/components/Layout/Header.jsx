import React, { useState } from 'react'
import { Bell, User, LogOut, Search, Menu, X } from 'lucide-react'

const Header = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-2 xs:px-4 sm:px-6 py-2 sm:py-4">
      <div className="flex items-center justify-between">
        {/* Logo/Brand - Hidden on mobile */}
        <div className="hidden sm:block">
          <h1 className="text-xl font-bold text-gray-900">Dashboard Presensi</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        {/* Search Bar - Desktop */}
        <div className="hidden md:block flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Mobile Search Toggle */}
        <button
          onClick={() => setIsSearchVisible(!isSearchVisible)}
          className="md:hidden p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Search className="w-4 h-4" />
        </button>
        
        {/* Desktop Right Section */}
        <div className="hidden sm:flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          
          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right hidden lg:block">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500 capitalize">{user.role}</p>
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <button
              onClick={onLogout}
              className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchVisible && (
        <div className="mt-2 sm:mt-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200">
          <div className="flex flex-col space-y-2 sm:space-y-3">
            {/* User Info */}
            <div className="flex items-center space-x-2 sm:space-x-3 p-2 bg-gray-50 rounded-lg">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">{user.name}</p>
                <p className="text-xs text-gray-500 capitalize truncate">{user.role}</p>
              </div>
            </div>
            
            {/* Notifications */}
            <button className="flex items-center space-x-2 sm:space-x-3 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Notifications</span>
              <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center flex-shrink-0">
                3
              </span>
            </button>
            
            {/* Logout */}
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 sm:space-x-3 p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Logout</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header 