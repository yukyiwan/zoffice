import express from 'express';
import { getPersons, createPerson, signIn } from '../controllers/person.js'
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPersons);

router.post('/', createPerson);

router.post('/signIn', signIn);

export default router;