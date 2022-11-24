import express from "express";
const router = express.Router();
const {postDids, getDid, getDidByUUID, deleteDidByUUID} = require("../controllers/didController");

router.post('/', (req: any, res: any, next: any) => {
    postDids(req, res);
});

router.get('/:uuid', (req: any, res: any, next: any) => {
    getDidByUUID(req, res);
});

router.get('/', (req: any, res: any, next: any) => {
    getDid(req, res);
});

router.delete('/:uuid', (req: any, res: any, next: any) => {
    deleteDidByUUID(req, res);
});

module.exports = router;