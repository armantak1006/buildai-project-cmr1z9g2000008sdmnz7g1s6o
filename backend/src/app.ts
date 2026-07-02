import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/error';
import usersRouter from './modules/users/users.routes';
import bookingsRouter from './modules/bookings/bookings.routes';
import tattoosRouter from './modules/tattoos/tattoos.routes';
import reviewsRouter from './modules/reviews/reviews.routes';
import search_queriesRouter from './modules/search_queries/search_queries.routes';
import notificationsRouter from './modules/notifications/notifications.routes';

export const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.use('/api/users', usersRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/tattoos', tattoosRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/search_queries', search_queriesRouter);
app.use('/api/notifications', notificationsRouter);

app.use(errorHandler);
