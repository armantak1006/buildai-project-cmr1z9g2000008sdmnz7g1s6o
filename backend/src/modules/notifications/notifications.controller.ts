import { Request, Response, NextFunction } from 'express';
import { notificationsService } from './notifications.service';

export const notificationsController = {
  async list(_req: Request, res: Response, next: NextFunction) {
    try { res.json(await notificationsService.list()); } catch (e) { next(e); }
  },
  async get(req: Request, res: Response, next: NextFunction) {
    try { res.json(await notificationsService.getById(req.params.id)); } catch (e) { next(e); }
  },
  async create(req: Request, res: Response, next: NextFunction) {
    try { res.status(201).json(await notificationsService.create(req.body)); } catch (e) { next(e); }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    try { res.json(await notificationsService.update(req.params.id, req.body)); } catch (e) { next(e); }
  },
  async remove(req: Request, res: Response, next: NextFunction) {
    try { await notificationsService.remove(req.params.id); res.status(204).end(); } catch (e) { next(e); }
  },
};
