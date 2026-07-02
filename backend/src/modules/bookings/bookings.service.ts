import { prisma } from '../../lib/prisma';
import { BookingInput } from './bookings.model';

export const bookingsService = {
  list() {
    return prisma.booking.findMany({ orderBy: { createdAt: 'desc' } });
  },
  async getById(id: string) {
    const item = await prisma.booking.findUnique({ where: { id } });
    if (!item) throw new Error('Not found');
    return item;
  },
  create(data: BookingInput) {
    return prisma.booking.create({ data });
  },
  async update(id: string, data: Partial<BookingInput>) {
    await this.getById(id);
    return prisma.booking.update({ where: { id }, data });
  },
  async remove(id: string) {
    await this.getById(id);
    await prisma.booking.delete({ where: { id } });
  },
};
