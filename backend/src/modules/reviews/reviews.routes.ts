import { Router } from 'express';
import { reviewsController } from './reviews.controller';

const router = Router();

router.get('/', reviewsController.list);
router.get('/:id', reviewsController.get);
router.post('/', reviewsController.create);
router.put('/:id', reviewsController.update);
router.delete('/:id', reviewsController.remove);

export default router;
