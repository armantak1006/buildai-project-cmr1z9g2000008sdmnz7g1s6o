import { Request, Response, NextFunction } from 'express';
import { usersService } from './users.service';

export const usersController = {
  async list(_req: Request, res: Response, next: NextFunction) {
    try { res.json(await usersService.list()); } catch (e) { next(e); }
  },
  async get(req: Request, res: Response, next: NextFunction) {
    try { res.json(await usersService.getById(req.params.id)); } catch (e) { next(e); }
  },
  async create(req: Request, res: Response, next: NextFunction) {
    try { res.status(201).json(await usersService.create(req.body)); } catch (e) { next(e); }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    try { res.json(await usersService.update(req.params.id, req.body)); } catch (e) { next(e); }
  },
  async remove(req: Request, res: Response, next: NextFunction) {
    try { await usersService.remove(req.params.id); res.status(204).end(); } catch (e) { next(e); }
  },
};
