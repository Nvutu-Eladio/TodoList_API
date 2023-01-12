'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/task-controller');
// const repository = require('../repositories/task-repository')

router.get('/', controller.get);
router.get('/admin/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;