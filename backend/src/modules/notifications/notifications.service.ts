import { prisma } from '../../lib/prisma';
import { NotificationInput } from './notifications.model';

export const notificationsService = {
  list() {
    return prisma.notification.findMany({ orderBy: { createdAt: 'desc' } });
  },
  async getById(id: string) {
    const item = await prisma.notification.findUnique({ where: { id } });
    if (!item) throw new Error('Not found');
    return item;
  },
  create(data: NotificationInput) {
    return prisma.notification.create({ data });
  },
  async update(id: string, data: Partial<NotificationInput>) {
    await this.getById(id);
    return prisma.notification.update({ where: { id }, data });
  },
  async remove(id: string) {
    await this.getById(id);
    await prisma.notification.delete({ where: { id } });
  },
};
