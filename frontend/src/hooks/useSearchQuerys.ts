import { useEffect, useState, useCallback } from 'react';
import { api } from '../lib/api';
import { SearchQuery } from '../types';

const PATH = '/search_queries';

export function useSearchQuerys() {
  const [data, setData] = useState<SearchQuery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(() => {
    setLoading(true);
    api.get<SearchQuery[]>(PATH)
      .then((d) => { setData(d); setError(null); })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const create = async (body: Omit<SearchQuery, 'id' | 'createdAt' | 'updatedAt'>) => {
    const created = await api.post<SearchQuery>(PATH, body);
    setData((prev) => [created, ...prev]);
    return created;
  };
  const update = async (id: string, body: Partial<SearchQuery>) => {
    const updated = await api.put<SearchQuery>(PATH + '/' + id, body);
    setData((prev) => prev.map((x) => (x.id === id ? updated : x)));
    return updated;
  };
  const remove = async (id: string) => {
    await api.del(PATH + '/' + id);
    setData((prev) => prev.filter((x) => x.id !== id));
  };

  return { data, loading, error, refresh, create, update, remove };
}
