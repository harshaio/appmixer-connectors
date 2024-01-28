'use strict';

const { makeRequest } = require('../../common');

module.exports = {

    async receive(context) {

        const { accountId, firstName, lastName, mobileNumber, email, gender, dob  } = context.messages.in.content;
        const payload = {
            'account_id': accountId,
            'first_name': firstName,
            'last_name': lastName,
            'mobile_number': mobileNumber,
            'gender': gender,
            'email': email,
            'dob': dob
        };
        const response = await makeRequest({ context, options: { path: '/contact', method: 'POST', data: payload } });

        const out = response.data;
        return context.sendJson(out, 'out');
    }
};

