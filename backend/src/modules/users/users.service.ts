import { prisma } from '../../lib/prisma';
import { UserInput } from './users.model';

export const usersService = {
  list() {
    return prisma.user.findMany({ orderBy: { createdAt: 'desc' } });
  },
  async getById(id: string) {
    const item = await prisma.user.findUnique({ where: { id } });
    if (!item) throw new Error('Not found');
    return item;
  },
  create(data: UserInput) {
    return prisma.user.create({ data });
  },
  async update(id: string, data: Partial<UserInput>) {
    await this.getById(id);
    return prisma.user.update({ where: { id }, data });
  },
  async remove(id: string) {
    await this.getById(id);
    await prisma.user.delete({ where: { id } });
  },
};
