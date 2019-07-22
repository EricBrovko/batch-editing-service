const stringInject = (string, key, value) => (
    string.replace(new RegExp('{' + key + '}', 'gi'), value)
);

const countBatchQueryResults = (results) => (
    results.reduce((acc, result) => {
        result ? acc.successCount++ : acc.faildCount++;
        return acc;
    }, {
            successCount: 0,
            faildCount: 0,
        })
);


module.exports = {
    stringInject,
    countBatchQueryResults
};