// handle the API response
function handleResponse(req, res, statusCode, data, message) {
    let isError = false;
    let errorMessage = message;
    switch (statusCode) {
        case 200:
            isError = false;
            errorMessage = message || 'OK';
            break;
        case 204:
            return res.sendStatus(204);
        case 400:
            isError = true;
            break;
        case 401:
            isError = true;
            errorMessage = message || 'Invalid user.';
            // clearTokens(req, res);
            break;
        case 403:
            isError = true;
            errorMessage = message || 'Access to this resource is denied.';
            break;
        case 404:
            isError = true;
            errorMessage = message || 'Not found';
            break;
        case 500:
            isError = true;
            errorMessage = message || "Internal server error."
            break;
        default:
            break;
    }
    const resObj = data || {};
    if (isError) {
        resObj.error = true;
        resObj.message = errorMessage;
    }
    return res.status(statusCode).json(resObj);
}

export default { handleResponse };