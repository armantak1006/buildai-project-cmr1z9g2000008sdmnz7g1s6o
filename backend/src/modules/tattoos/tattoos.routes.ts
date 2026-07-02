import { Router } from 'express';
import { tattoosController } from './tattoos.controller';

const router = Router();

router.get('/', tattoosController.list);
router.get('/:id', tattoosController.get);
router.post('/', tattoosController.create);
router.put('/:id', tattoosController.update);
router.delete('/:id', tattoosController.remove);

export default router;
