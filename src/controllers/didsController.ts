import { handleResponse } from "../utils/handleResponse";
import axios from "axios";

exports.listDids = (request: any, response:any) => {
    axios.get(process.env.DOCKIO_BASE_URL + "/dids", {
        headers: {"DOCK-API-TOKEN": process.env.DOCKIO_API_KEY}
    })
        .then(res => {
            console.log(res)
            response.send(res.data);
        })
        .catch(err => {
            console.log(err);
            handleResponse(request, response, 500, "Failed to get DIDs");
        })
}

exports.createDid = (req: any, res: any) => {
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