import { prisma } from '../../lib/prisma';
import { SearchQueryInput } from './search_queries.model';

export const search_queriesService = {
  list() {
    return prisma.searchQuery.findMany({ orderBy: { createdAt: 'desc' } });
  },
  async getById(id: string) {
    const item = await prisma.searchQuery.findUnique({ where: { id } });
    if (!item) throw new Error('Not found');
    return item;
  },
  create(data: SearchQueryInput) {
    return prisma.searchQuery.create({ data });
  },
  async update(id: string, data: Partial<SearchQueryInput>) {
    await this.getById(id);
    return prisma.searchQuery.update({ where: { id }, data });
  },
  async remove(id: string) {
    await this.getById(id);
    await prisma.searchQuery.delete({ where: { id } });
  },
};
