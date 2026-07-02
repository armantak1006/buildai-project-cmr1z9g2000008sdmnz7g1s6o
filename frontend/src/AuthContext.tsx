import { createContext, useContext, useState, ReactNode } from 'react';

interface User { email: string; }
interface AuthValue { user: User | null; login: (email: string, password: string) => void; logout: () => void; }

const AuthContext = createContext<AuthValue>({ user: null, login: () => {}, logout: () => {} });

const STORAGE_KEY = 'app_user';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : null; } catch { return null; }
  });

  const login = (email: string, _password: string) => {
    const u = { email };
    setUser(u);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(u)); } catch {}
  };
  const logout = () => {
    setUser(null);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() { return useContext(AuthContext); }
