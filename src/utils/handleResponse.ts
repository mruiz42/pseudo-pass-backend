// handle the API response
const handleResponse = (req: any, res: any, statusCode: any = 200, message?: any) => {
    let isError = false;
    let responseMessage = message;
    switch (statusCode) {
        case 200:
            isError = false;
            responseMessage = message || 'OK';
            break;
        case 204:
            isError = false;
            return res.sendStatus(204);
        case 400:
            isError = true;
            break;
        case 401:
            isError = true;
            responseMessage = message || 'Invalid user.';
            // clearTokens(req, res);
            break;
        case 403:
            isError = true;
            responseMessage = message || 'Access to this resource is denied.';
            break;
        case 404:
            isError = true;
            responseMessage = message || 'Not found';
            break;
        case 500:
            isError = true;
            responseMessage = message || "Internal server error."
            break;
        default:
            break;
    }
    const resObj = { error: false, statusCode: statusCode, message: responseMessage };
    if (isError) {
        resObj.error = true;
    }
    return res.status(statusCode).json(resObj);
}

export { handleResponse };