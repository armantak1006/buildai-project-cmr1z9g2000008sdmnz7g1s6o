import { useEffect, useState, useCallback } from 'react';
import { api } from '../lib/api';
import { Tattoo } from '../types';

const PATH = '/tattoos';

export function useTattoos() {
  const [data, setData] = useState<Tattoo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(() => {
    setLoading(true);
    api.get<Tattoo[]>(PATH)
      .then((d) => { setData(d); setError(null); })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const create = async (body: Omit<Tattoo, 'id' | 'createdAt' | 'updatedAt'>) => {
    const created = await api.post<Tattoo>(PATH, body);
    setData((prev) => [created, ...prev]);
    return created;
  };
  const update = async (id: string, body: Partial<Tattoo>) => {
    const updated = await api.put<Tattoo>(PATH + '/' + id, body);
    setData((prev) => prev.map((x) => (x.id === id ? updated : x)));
    return updated;
  };
  const remove = async (id: string) => {
    await api.del(PATH + '/' + id);
    setData((prev) => prev.filter((x) => x.id !== id));
  };

  return { data, loading, error, refresh, create, update, remove };
}
