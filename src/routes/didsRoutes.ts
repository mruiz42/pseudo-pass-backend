import express from "express";
const router = express.Router();
const {createDid, listDids, getDidByUUID, deleteDidByUUID} = require("../controllers/didsController");

router.post('/', (req: any, res: any, next: any) => {
    createDid(req, res);
});

router.get('/:uuid', (req: any, res: any, next: any) => {
    getDidByUUID(req, res);
});

router.get('/', (req: any, res: any, next: any) => {
    listDids(req, res);
});

router.delete('/:uuid', (req: any, res: any, next: any) => {
    deleteDidByUUID(req, res);
});

module.exports = router;