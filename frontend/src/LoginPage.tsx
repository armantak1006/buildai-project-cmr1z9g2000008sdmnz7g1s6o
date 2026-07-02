import { useState } from 'react';
import { useAuth } from './AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    if (!email.trim() || !password.trim()) return;
    login(email.trim(), password);
  };
  const onKeyDown = (e: React.KeyboardEvent) => { if (e.key === 'Enter') signIn(); };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-100 p-8 space-y-5">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">My App</h1>
          <p className="text-sm text-slate-500 mt-1">Sign in to continue</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={onKeyDown} placeholder="you@example.com"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={onKeyDown} placeholder="••••••••"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <button type="button" onClick={signIn} className="w-full py-2.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
          Sign in
        </button>
        <p className="text-center text-xs text-slate-400">Demo: any email and password works.</p>
      </div>
    </div>
  );
}
