// src/routes/index.ts
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to TypeScript REST API!' });
});

export default router;
