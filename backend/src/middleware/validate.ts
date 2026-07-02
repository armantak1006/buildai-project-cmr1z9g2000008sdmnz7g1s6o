import { Request, Response, NextFunction } from 'express';

export function requireBody(fields: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const missing = fields.filter((f) => req.body?.[f] === undefined);
    if (missing.length) return res.status(400).json({ error: 'Missing fields: ' + missing.join(', ') });
    next();
  };
}
