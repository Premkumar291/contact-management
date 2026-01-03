import express from 'express';
import { getContacts, createContact, deleteContact } from '../controller/contact.controller.js';

const router = express.Router();

//Routes for contacts
router.post('/contacts', createContact);
router.get('/contacts', getContacts);
router.delete('/contacts/:id', deleteContact);

export default router;