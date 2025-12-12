import React from 'react';
import { Wallet, TrendingUp, Shield, BarChart3, ArrowRight, CheckCircle, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    console.log(`Navigate to: ${path}`);
  };

  const features = [
    {
      icon: <Wallet className="w-8 h-8 text-violet-700" />,
      title: "Account Management",
      description: "Manage multiple accounts including checking, savings, and credit cards in one place."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-violet-700" />,
      title: "Transaction Tracking",
      description: "Track all your income, expenses, and transfers with detailed categorization."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-violet-700" />,
      title: "Budget Planning",
      description: "Set budgets for different categories and monitor your spending habits."
    },
    {
      icon: <Shield className="w-8 h-8 text-violet-700" />,
      title: "Secure & Private",
      description: "Your financial data is encrypted and securely stored with industry-standard protection."
    }
  ];

  const benefits = [
    "Real-time balance tracking across all accounts",
    "Detailed expense categorization",
    "Visual budget progress indicators",
    "Monthly and yearly financial reports",
    "Easy transfer between accounts",
    "Comprehensive transaction history"
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "₹50Cr+", label: "Transactions Tracked" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.8/5", label: "User Rating" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-">
                <Wallet className="text-violet-500 mr-2" size={32} />
                <h1 className="text-2xl font-bold font-poppins tracking-wide">
                  My<span className="text-violet-700">Wallet</span>
                </h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleNavigate('/login')}
                className="px-6 py-2 text-gray-700 hover:text-violet-700 font-medium transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => handleNavigate('/signup')}
                className="px-6 py-2 rounded-lg bg-violet-700 hover:bg-violet-800 text-white font-medium shadow-md active:scale-95 transition-all"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
      <section className="bg-gradient-to-r from-violet-700 to-violet-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Take Control of Your Finances
              </h1>
              <p className="text-xl text-violet-100">
                Track your accounts, manage budgets, and monitor transactions all in one powerful platform.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleNavigate('/signup')}
                  className="px-8 py-3 rounded-lg bg-white text-violet-700 hover:bg-gray-100 font-semibold shadow-lg active:scale-95 transition-all flex items-center gap-2"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleNavigate('/login')}
                  className="px-8 py-3 rounded-lg bg-violet-800 hover:bg-violet-900 text-white font-semibold shadow-lg active:scale-95 transition-all"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-violet-700 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to manage your finances effectively</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-gray-200">
                <div className="bg-violet-100 rounded-full p-3 w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose FinanceTracker?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform provides comprehensive financial management tools designed to help you achieve your financial goals.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-700 to-violet-500 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Users className="w-8 h-8 text-white" />
                    <h3 className="text-2xl font-bold text-white">Join 10,000+ Users</h3>
                  </div>
                  <p className="text-violet-100">
                    Thousands of users trust FinanceTracker to manage their financial lives. Start your journey today!
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Award className="w-8 h-8 text-white" />
                    <h3 className="text-2xl font-bold text-white">Award-Winning</h3>
                  </div>
                  <p className="text-violet-100">
                    Recognized for excellence in financial technology and user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-violet-700 to-violet-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Take Control?
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Join thousands of users who are already managing their finances smarter with FinanceTracker.
          </p>
          <button
            onClick={() => handleNavigate('/signup')}
            className="px-10 py-4 rounded-lg bg-white text-violet-700 hover:bg-gray-100 font-bold text-lg shadow-2xl active:scale-95 transition-all inline-flex items-center gap-2"
          >
            Start Free Today
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-violet-700 rounded-full p-2">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">FinanceTracker</h3>
              </div>
              <p className="text-gray-400">
                Your trusted partner in financial management.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FinanceTracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;