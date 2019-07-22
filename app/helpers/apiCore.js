'use strict';

module.exports = {
  sendSuccessResponse : (request, response, data, code) => {
    if (request.timedout === true) {
      return;
    }

    if (request.sentResponse === true){
      return;
    }

    code = code || 200;
    request.sentResponse = true;

    return response.status(code).send(data);
  },

  sendErrorResponse : (request, response, errors, code) => {
    code = code || 400;

    if (request.timedout === true) {
      return;
    }

    if (request.sentResponse === true){
      return;
    }

    request.sentResponse = true;

    return response.status(code).json({ errors });
  }
};
