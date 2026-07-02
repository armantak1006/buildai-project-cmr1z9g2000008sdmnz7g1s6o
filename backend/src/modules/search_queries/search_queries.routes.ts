import { Router } from 'express';
import { search_queriesController } from './search_queries.controller';

const router = Router();

router.get('/', search_queriesController.list);
router.get('/:id', search_queriesController.get);
router.post('/', search_queriesController.create);
router.put('/:id', search_queriesController.update);
router.delete('/:id', search_queriesController.remove);

export default router;
