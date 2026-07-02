import { Request, Response, NextFunction } from 'express';
import { reviewsService } from './reviews.service';

export const reviewsController = {
  async list(_req: Request, res: Response, next: NextFunction) {
    try { res.json(await reviewsService.list()); } catch (e) { next(e); }
  },
  async get(req: Request, res: Response, next: NextFunction) {
    try { res.json(await reviewsService.getById(req.params.id)); } catch (e) { next(e); }
  },
  async create(req: Request, res: Response, next: NextFunction) {
    try { res.status(201).json(await reviewsService.create(req.body)); } catch (e) { next(e); }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    try { res.json(await reviewsService.update(req.params.id, req.body)); } catch (e) { next(e); }
  },
  async remove(req: Request, res: Response, next: NextFunction) {
    try { await reviewsService.remove(req.params.id); res.status(204).end(); } catch (e) { next(e); }
  },
};
