import express from "express";
const router = express.Router();
const { postCredentials, getCredentialsByUUID, deleteCredentialsByUUID } = require("../controllers/credentialController")

router.post('/', (req: any, res: any, next: any) => {
    postCredentials(req, res);
});

router.get('/:uuid', (req: any, res: any, next: any) => {
    getCredentialsByUUID(req, res);
});

router.delete('/:uuid', (req: any, res: any, next: any) => {
    deleteCredentialsByUUID(req, res);
});

module.exports = router;