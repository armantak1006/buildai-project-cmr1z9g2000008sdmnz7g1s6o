import { Router } from 'express';
import { bookingsController } from './bookings.controller';

const router = Router();

router.get('/', bookingsController.list);
router.get('/:id', bookingsController.get);
router.post('/', bookingsController.create);
router.put('/:id', bookingsController.update);
router.delete('/:id', bookingsController.remove);

export default router;
