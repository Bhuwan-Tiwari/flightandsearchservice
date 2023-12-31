const ClientErrorCodes = Object.freeze({
    BAD_REQUESRT :400,
    UNAUTHORIZED: 401,
    NOT_FOUND : 404
});

const ServerError = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED:501

});
const SuccessCodes = Object.freeze({
    ok :200,
    Created :201
})

module.exports = {
    ClientErrorCodes,
    ServerError,
   SuccessCodes   
}