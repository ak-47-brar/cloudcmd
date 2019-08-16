'use strict';

const tryToCatch = require('try-to-catch/legacy');
const all = Promise.all.bind(Promise);

module.exports = async (a) => {
    const [e, result = []] = await tryToCatch(all, a);
    
    return [
        e,
        ...result,
    ];
};

