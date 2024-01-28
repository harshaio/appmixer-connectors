'use strict';

const { makeRequest } = require('../../common');

module.exports = {

    async receive(context) {

        const response = await makeRequest({ context, options: { path: '/contacts' } });

        const out = response.data;
        return context.sendJson(out, 'out');
    }
};

