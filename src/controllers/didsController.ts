import { handleResponse } from "../utils/handleResponse";
import axios from "axios";
const DOCKIO_BASE_URL = process.env.DOCKIO_BASE_URL;

exports.listDids = (request: any, response:any) => {
    axios.get("/dids", {
        headers: { "DOCK-API-TOKEN": process.env.DOCKIO_API_KEY },
        baseURL: DOCKIO_BASE_URL
    })
        .then(res => {
            console.log(res);
            response.send(res.data);
        })
        .catch(err => {
            console.log(err);
            handleResponse(request, response, 500, "Failed to get DIDs");
        })
}

exports.createDid = (request: any, response: any) => {
    console.log("/dids/postDids");

    // handleResponse(req, res);
}

exports.getDidByUUID = (request: any, response:any) => {
    const req_url = `/dids/${request.params.uuid}`;
    axios.get(req_url, {
        headers: { "DOCK-API-TOKEN": process.env.DOCKIO_API_KEY },
        baseURL: DOCKIO_BASE_URL
    })
        .then(res => {
            response.send(res);
        })
        .catch(err => {
            handleResponse(request, response, 500, err.code);
        })
}

exports.getDid = (req: any, res:any) => {
    console.log("/dids/getDid");
    handleResponse(req, res, 200, "Hi");
}

exports.deleteDidByUUID = (req: any, res:any) => {
    console.log("/dids/deleteDidByUUID");
    handleResponse(req, res);
}