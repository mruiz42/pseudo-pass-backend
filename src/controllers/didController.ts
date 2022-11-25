import { handleResponse } from "../utils/handleResponse";

exports.postDids = (req: any, res: any) => {
    console.log("/dids/postDids");
    handleResponse(req, res);
}

exports.getDidByUUID = (req: any, res:any) => {
    console.log("/dids/getDidByUUID");
    handleResponse(req, res);
}

exports.getDid = (req: any, res:any) => {
    console.log("/dids/getDid");
    handleResponse(req, res, 200, "Hi");
}

exports.deleteDidByUUID = (req: any, res:any) => {
    console.log("/dids/deleteDidByUUID");
    handleResponse(req, res);
}