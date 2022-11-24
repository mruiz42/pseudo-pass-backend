const express = require('express');
const router = express.Router();
const {postDid, getDid, getDidByUUID, deleteDidByUUID} = require("../controllers/didController");

router.post('/', (req, res, next) => {
    postDid(req, res);
});

router.get('/:uuid', (req, res, next) => {
    getDidByUUID(req, res);
});

router.get('/', (req, res, next) => {
    getDid(req, res);
});

router.delete('/:uuid', (req, res, next) => {
    deleteDidByUUID(req, res);
});