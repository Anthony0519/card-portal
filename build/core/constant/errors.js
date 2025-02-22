"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = void 0;
var Errors;
(function (Errors) {
    Errors["NOT_AUTHENTICATED"] = "This request is not authenticated";
    Errors["UNAUTHORIZED"] = "'Unauthorized access. Please log in to continue'";
    Errors["BAD_REQUEST"] = "Invalid data provided for the request";
    Errors["CONFLICT"] = "The request could not be completed due to a conflict with the current state of the target resource";
    Errors["FORBIDDEN"] = "Forbidden. You do not have permission to access this resource";
    Errors["REQUEST_VALIDATION"] = "There was an issue with your request. Please check the provided information and try again";
    Errors["RESOURCE_NOT_FOUND"] = "The resource you are looking for could not be found";
    Errors["SERVICE_UNAVAILABLE"] = "Service unavailable. Please try again later";
    Errors["INVALID_AUTHORIZATION_TOKEN"] = "Authorization token is invalid";
    Errors["INTERNAL_SERVER"] = "Oops! Something went wrong on our end. Please try again later or contact support if the issue persists";
    Errors["TOKEN_EXPIRY_ERROR"] = "Token has expired";
})(Errors || (exports.Errors = Errors = {}));
