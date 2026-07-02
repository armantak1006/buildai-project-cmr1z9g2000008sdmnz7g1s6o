import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  const message = err?.message || 'Internal Server Error';
  const status = message === 'Not found' ? 404 : 400;
  res.status(status).json({ error: message });
}
