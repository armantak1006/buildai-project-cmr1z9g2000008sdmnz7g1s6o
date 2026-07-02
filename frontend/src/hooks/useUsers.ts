import { useEffect, useState, useCallback } from 'react';
import { api } from '../lib/api';
import { User } from '../types';

const PATH = '/users';

export function useUsers() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(() => {
    setLoading(true);
    api.get<User[]>(PATH)
      .then((d) => { setData(d); setError(null); })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const create = async (body: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) => {
    const created = await api.post<User>(PATH, body);
    setData((prev) => [created, ...prev]);
    return created;
  };
  const update = async (id: string, body: Partial<User>) => {
    const updated = await api.put<User>(PATH + '/' + id, body);
    setData((prev) => prev.map((x) => (x.id === id ? updated : x)));
    return updated;
  };
  const remove = async (id: string) => {
    await api.del(PATH + '/' + id);
    setData((prev) => prev.filter((x) => x.id !== id));
  };

  return { data, loading, error, refresh, create, update, remove };
}
