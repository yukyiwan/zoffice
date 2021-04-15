import express from 'express';
import { getPersons, createPerson, signIn, updatePerson, deletePerson } from '../controllers/person.js'
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPersons);

router.post('/', createPerson);

router.post('/signIn', signIn);

router.patch('/:id', updatePerson);

router.delete('/:id', deletePerson);

export default router;