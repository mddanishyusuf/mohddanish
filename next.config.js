const dotEnvResult = require('dotenv').config();

const prod = process.env.NODE_ENV === 'production';

if (dotEnvResult.error) {
    throw dotEnvResult.error;
}

module.exports = {
    target: 'serverless',

    env: {
        GITHUB_ACCESS_TOKEN: prod ? process.env.GITHUB_ACCESS_TOKEN : process.env.GITHUB_ACCESS_TOKEN,
    },
};
