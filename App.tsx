
import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
// FIX: Add '.tsx' extension to imports to resolve module not found errors.
import DashboardPage from './pages/DashboardPage.tsx';
import AnalyticsPage from './pages/AnalyticsPage.tsx';
import ReportsPage from './pages/ReportsPage.tsx';
// FIX: Add '.tsx' extension to import for consistency and to prevent module resolution issues.
import SettingsPage from './pages/SettingsPage.tsx';
import Loader from './components/Loader';
import LoginPage from './pages/LoginPage';

// Theme context
type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

// Main App Component
const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [currentPage, setCurrentPage] = useState('Dashboard');
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
    const sessionAuth = sessionStorage.getItem('isAuthenticated');
    if (sessionAuth === 'true') {
        setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated');
  };

  const renderPage = (): ReactNode => {
    switch (currentPage) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'Analytics':
        return <AnalyticsPage />;
      case 'Reports':
        return <ReportsPage />;
      case 'Settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };
  
  if (isLoading) {
      return <Loader />;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {!isAuthenticated ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <div className="flex h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header currentPage={currentPage} onLogout={handleLogout} />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-light-bg dark:bg-dark-bg p-6">
              {renderPage()}
            </main>
          </div>
        </div>
      )}
    </ThemeContext.Provider>
  );
};

export default App;
