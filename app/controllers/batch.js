"use strict";

const apiCore = require("../helpers/apiCore");
const { generateBatchRequests } = require("../services/batch");
const { countBatchQueryResults } = require("../utils");

module.exports = {
  put: (req, res) => {
    const {
      request: { url, verb },
      payloads
    } = req.body;

    const promises = generateBatchRequests(req);

    return Promise.all(promises)
      .then(results => {
          const responseCounts = countBatchQueryResults(results);

          return apiCore.sendSuccessResponse(req, res, {
            statuses: responseCounts
          });
      })
      .catch(error => apiCore.sendSuccessResponse(req, res, { error }));
  },
};
