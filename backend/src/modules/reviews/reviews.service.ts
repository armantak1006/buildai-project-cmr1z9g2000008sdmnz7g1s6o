import { prisma } from '../../lib/prisma';
import { ReviewInput } from './reviews.model';

export const reviewsService = {
  list() {
    return prisma.review.findMany({ orderBy: { createdAt: 'desc' } });
  },
  async getById(id: string) {
    const item = await prisma.review.findUnique({ where: { id } });
    if (!item) throw new Error('Not found');
    return item;
  },
  create(data: ReviewInput) {
    return prisma.review.create({ data });
  },
  async update(id: string, data: Partial<ReviewInput>) {
    await this.getById(id);
    return prisma.review.update({ where: { id }, data });
  },
  async remove(id: string) {
    await this.getById(id);
    await prisma.review.delete({ where: { id } });
  },
};
