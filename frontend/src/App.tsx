import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import LoginPage from './LoginPage';
import HomePage from './pages/HomePage';
import LoginScreenPage from './pages/LoginScreenPage';
import SignupScreenPage from './pages/SignupScreenPage';
import DashboardScreenPage from './pages/DashboardScreenPage';
import PortfolioScreenPage from './pages/PortfolioScreenPage';
import BookingScreenPage from './pages/BookingScreenPage';
import SearchScreenPage from './pages/SearchScreenPage';
import ProfileScreenPage from './pages/ProfileScreenPage';

const NAV = [
  { to: '/', label: "Home" },
  { to: '/login-screen', label: "Login Screen" },
  { to: '/signup-screen', label: "Signup Screen" },
  { to: '/dashboard-screen', label: "Dashboard Screen" },
  { to: '/portfolio-screen', label: "Portfolio Screen" },
  { to: '/booking-screen', label: "Booking Screen" },
  { to: '/search-screen', label: "Search Screen" },
  { to: '/profile-screen', label: "Profile Screen" },
];

function Sidebar() {
  const { user, logout } = useAuth();
  return (
    <aside className="w-64 shrink-0 h-screen sticky top-0 bg-slate-900 text-slate-200 flex flex-col">
      <div className="px-5 py-5 border-b border-slate-800">
        <h1 className="text-lg font-bold text-white truncate">My App</h1>
      </div>
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              'block px-3 py-2 rounded-lg text-sm font-medium transition-colors ' +
              (isActive ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="px-4 py-3 border-t border-slate-800">
        <p className="text-xs text-slate-400 truncate mb-2">{user?.email}</p>
        <button onClick={logout} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
          Sign out
        </button>
      </div>
    </aside>
  );
}

function Shell() {
  const { user } = useAuth();
  if (!user) return <LoginPage />;
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login-screen" element={<LoginScreenPage />} />
          <Route path="/signup-screen" element={<SignupScreenPage />} />
          <Route path="/dashboard-screen" element={<DashboardScreenPage />} />
          <Route path="/portfolio-screen" element={<PortfolioScreenPage />} />
          <Route path="/booking-screen" element={<BookingScreenPage />} />
          <Route path="/search-screen" element={<SearchScreenPage />} />
          <Route path="/profile-screen" element={<ProfileScreenPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </AuthProvider>
  );
}
