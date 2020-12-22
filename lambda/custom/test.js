const strings = require('./languageStrings');
const builder = require('./lib/workout.builder');
// i18n library dependency, we use it below in a localisation interceptor
const i18n = require('i18next');

const handlerInput = {};

i18n.init({
    lng: 'en',
    resources: strings
}).then((t) => {
    handlerInput.t = (...args) => t(...args);
    console.log(builder.random(handlerInput));
});

// console.log(strings);
