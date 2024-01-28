'use strict';

const { makeRequest } = require('./common');

module.exports = {

    type: 'apiKey',


    definition: {

        accountNameFromProfileInfo: 'projectName',

        auth: {
            apiKey: {
                type: 'text',
                name: 'API Key',
                required: true,
                tooltip: 'Log into your Airship account and find it in <i>Settings > Integrations > API Integration</i> page.'
            }
        },
        validate: async context => {

            await makeRequest({ context, options: { path: '/me' } });
            return true;
        }
    }
};
