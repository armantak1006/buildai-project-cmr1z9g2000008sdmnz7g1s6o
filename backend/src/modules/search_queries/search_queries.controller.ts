import { Request, Response, NextFunction } from 'express';
import { search_queriesService } from './search_queries.service';

export const search_queriesController = {
  async list(_req: Request, res: Response, next: NextFunction) {
    try { res.json(await search_queriesService.list()); } catch (e) { next(e); }
  },
  async get(req: Request, res: Response, next: NextFunction) {
    try { res.json(await search_queriesService.getById(req.params.id)); } catch (e) { next(e); }
  },
  async create(req: Request, res: Response, next: NextFunction) {
    try { res.status(201).json(await search_queriesService.create(req.body)); } catch (e) { next(e); }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    try { res.json(await search_queriesService.update(req.params.id, req.body)); } catch (e) { next(e); }
  },
  async remove(req: Request, res: Response, next: NextFunction) {
    try { await search_queriesService.remove(req.params.id); res.status(204).end(); } catch (e) { next(e); }
  },
};
