import { prisma } from '../../lib/prisma';
import { TattooInput } from './tattoos.model';

export const tattoosService = {
  list() {
    return prisma.tattoo.findMany({ orderBy: { createdAt: 'desc' } });
  },
  async getById(id: string) {
    const item = await prisma.tattoo.findUnique({ where: { id } });
    if (!item) throw new Error('Not found');
    return item;
  },
  create(data: TattooInput) {
    return prisma.tattoo.create({ data });
  },
  async update(id: string, data: Partial<TattooInput>) {
    await this.getById(id);
    return prisma.tattoo.update({ where: { id }, data });
  },
  async remove(id: string) {
    await this.getById(id);
    await prisma.tattoo.delete({ where: { id } });
  },
};
