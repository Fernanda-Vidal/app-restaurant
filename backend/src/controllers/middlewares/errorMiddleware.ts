import { Request, Response, NextFunction } from 'express';
import HttpException from '../../utils/HTTPException';

function errorMiddleware(err: Error, _req: Request, res: Response, next: NextFunction) {
  const { status, message } = err as HttpException;

  res.status(status || 500).json({ message });

  next();
}

export default errorMiddleware;