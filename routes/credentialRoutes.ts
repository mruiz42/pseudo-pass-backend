const express = require('express');
const router = express.Router();
const {postCredentials, getCredentialsByUUID, deleteCredentialsByUUID} = require("../controllers/credentialController")

router.post('/', (req, res, next) => {
    postCredentials(req, res);
});

router.get('/:uuid', (req, res, next) => {
    getCredentialsByUUID(req, res);
});

router.delete('/:uuid', (req, res, next) => {
    deleteCredentialsByUUID(req, res);
});