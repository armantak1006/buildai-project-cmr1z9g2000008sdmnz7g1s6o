import { Request, Response, NextFunction } from 'express';
import { tattoosService } from './tattoos.service';

export const tattoosController = {
  async list(_req: Request, res: Response, next: NextFunction) {
    try { res.json(await tattoosService.list()); } catch (e) { next(e); }
  },
  async get(req: Request, res: Response, next: NextFunction) {
    try { res.json(await tattoosService.getById(req.params.id)); } catch (e) { next(e); }
  },
  async create(req: Request, res: Response, next: NextFunction) {
    try { res.status(201).json(await tattoosService.create(req.body)); } catch (e) { next(e); }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    try { res.json(await tattoosService.update(req.params.id, req.body)); } catch (e) { next(e); }
  },
  async remove(req: Request, res: Response, next: NextFunction) {
    try { await tattoosService.remove(req.params.id); res.status(204).end(); } catch (e) { next(e); }
  },
};
