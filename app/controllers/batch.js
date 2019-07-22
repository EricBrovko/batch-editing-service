"use strict";

const apiCore = require("../helpers/apiCore");
const { generateBatchRequests } = require("../services/batch");
const { countBatchQueryResults } = require("../utils");

module.exports = {
  runRequests: (req, res) => {
    const requests = generateBatchRequests(req);

    return Promise.all(requests)
      .then(results => apiCore.sendSuccessResponse(req, res, {
        statuses: countBatchQueryResults(results)
      }))
      .catch(error => apiCore.sendErrorResponse(req, res, { error }));
  },
};
