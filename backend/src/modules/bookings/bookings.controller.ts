import { Request, Response, NextFunction } from 'express';
import { bookingsService } from './bookings.service';

export const bookingsController = {
  async list(_req: Request, res: Response, next: NextFunction) {
    try { res.json(await bookingsService.list()); } catch (e) { next(e); }
  },
  async get(req: Request, res: Response, next: NextFunction) {
    try { res.json(await bookingsService.getById(req.params.id)); } catch (e) { next(e); }
  },
  async create(req: Request, res: Response, next: NextFunction) {
    try { res.status(201).json(await bookingsService.create(req.body)); } catch (e) { next(e); }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    try { res.json(await bookingsService.update(req.params.id, req.body)); } catch (e) { next(e); }
  },
  async remove(req: Request, res: Response, next: NextFunction) {
    try { await bookingsService.remove(req.params.id); res.status(204).end(); } catch (e) { next(e); }
  },
};
