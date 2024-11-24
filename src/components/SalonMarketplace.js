import React, { useState } from 'react';
import { Search, MapPin, Star, Clock, Calendar, Filter, Scissors, Heart, Share2, Menu, User, Bell, BookOpen, Home, Gift, Settings } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Search },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'deals', label: 'Deals', icon: Gift },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Scissors className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">SalonSpot</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium
                    ${currentPage === item.id 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <BookOpen className="h-5 w-5" />
            </button>
            <div className="relative">
              <button 
                className="flex items-center space-x-2 p-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <User className="h-5 w-5" />
                <span className="hidden md:inline">Account</span>
              </button>
              
              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                  <a href="#bookings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Bookings</a>
                  <a href="#favorites" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Favorites</a>
                  <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                  <a href="#logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium
                    ${currentPage === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

const SalonMarketplace = () => {
  const [currentPage, setCurrentPage] = useState('explore');
  const [selectedService, setSelectedService] = useState('all');
  const [selectedSort, setSelectedSort] = useState('recommended');
  
  // Mock data for demonstration
  const salons = [
    {
      id: 1,
      name: "Elegant Cuts",
      rating: 4.8,
      reviews: 234,
      distance: "0.8",
      image: "/api/placeholder/300/200",
      services: ["Haircut", "Color", "Style"],
      price: "$$",
      nextAvailable: "Today",
    },
    {
      id: 2,
      name: "Modern Style Studio",
      rating: 4.6,
      reviews: 186,
      distance: "1.2",
      image: "/api/placeholder/300/200",
      services: ["Haircut", "Beard", "Facial"],
      price: "$$$",
      nextAvailable: "Tomorrow",
    }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Welcome to SalonSpot</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle>Book Your Next Appointment</CardTitle>
                  <CardDescription>Find and book services from top-rated salons</CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Explore Salons
                  </button>
                </CardContent>
              </Card>
              <Card className="bg-purple-50">
                <CardHeader>
                  <CardTitle>Special Offers</CardTitle>
                  <CardDescription>Discover deals and discounts</CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    View Deals
                  </button>
                </CardContent>
              </Card>
              <Card className="bg-green-50">
                <CardHeader>
                  <CardTitle>Trending Styles</CardTitle>
                  <CardDescription>Get inspired by latest trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    See Trends
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      
      case 'appointments':
        return (
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">My Appointments</h1>
            <div className="grid grid-cols-1 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">Elegant Cuts</h3>
                        <p className="text-sm text-gray-600">Haircut with John</p>
                        <p className="text-sm text-gray-600">Tomorrow at 2:00 PM</p>
                      </div>
                      <div className="space-x-2">
                        <button className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                          Reschedule
                        </button>
                        <button className="px-3 py-1 text-sm border border-red-600 text-red-600 rounded hover:bg-red-50">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'deals':
        return (
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Special Offers & Deals</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 border-yellow-400">
                <CardHeader>
                  <div className="bg-yellow-400 text-white px-2 py-1 rounded absolute top-2 right-2">
                    50% OFF
                  </div>
                  <CardTitle>First-Time Client Special</CardTitle>
                  <CardDescription>Valid until Dec 31, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Get 50% off your first haircut at participating salons</p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full">
                    Claim Offer
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'explore':
      default:
        return (
          <>
            {/* Search Bar */}
            <div className="bg-white shadow-sm">
              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-gray-900">Find Your Perfect Salon</h1>
                  <div className="flex items-center space-x-4">
                    <button className="btn-secondary p-2 rounded-full">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button className="btn-secondary p-2 rounded-full">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search salons, services, or stylists..."
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-48 pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Filters Section */}
            <div className="border-b bg-white">
              <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center space-x-4 overflow-x-auto">
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Service Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Services</SelectItem>
                      <SelectItem value="haircut">Haircut</SelectItem>
                      <SelectItem value="color">Hair Color</SelectItem>
                      <SelectItem value="style">Styling</SelectItem>
                      <SelectItem value="facial">Facial</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedSort} onValueChange={setSelectedSort}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>

                  <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                    <Clock className="h-4 w-4" />
                    <span>Available Today</span>
                  </button>

                  <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                    <Filter className="h-4 w-4" />
                    <span>More Filters</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Salon Cards */}
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {salons.map((salon) => (
                  <Card key={salon.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <img src={salon.image} alt={salon.name} className="w-full h-48 object-cover" />
                    <CardHeader className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{salon.name}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            {salon.rating} ({salon.reviews} reviews) · {salon.distance} miles
                          </CardDescription>
                        </div>
                        <span className="text-sm font-medium">{salon.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {salon.services.map((service, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                            {service}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          Next available: {salon.nextAvailable}
                        </span>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                          Book Now
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="pt-16">
        {renderPage()}
      </div>
    </div>
  );
};

export default SalonMarketplace;