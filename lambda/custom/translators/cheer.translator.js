const cheers = {
    DO_BETTER: {
        de: '',
        en: '<amazon:emotion name="disappointed" intensity="high">Come on, you can do better than that!</amazon:emotion>',
        es: '',
        fr: '',
        ja: '',
        hi: '',
        it: '',
        pt: ''
    },
    GOOD_GOING: {
        de: '',
        en: '<amazon:emotion name="excited" intensity="high">Good going! I knew you could do it!</amazon:emotion>',
        es: '',
        fr: '',
        ja: '',
        hi: '',
        it: '',
        pt: ''
    },
    GOOD_JOB: {
        de: '',
        en: '<amazon:emotion name="excited" intensity="medium">Good job! For this next one, give me a little more gusto!</amazon:emotion>',
        es: '',
        fr: '',
        ja: '',
        hi: '',
        it: '',
        pt: ''
    },
    GREAT_JOB: {
        de: '',
        en: '<amazon:emotion name="excited" intensity="medium">Great job! I never doubted you. Well, maybe for a second I did?</amazon:emotion>',
        es: '',
        fr: '',
        ja: '',
        hi: '',
        it: '',
        pt: ''
    },
    IMPRESSED: {
        de: '',
        en: '<amazon:emotion name="excited" intensity="high">Wow, I am really impressed!</amazon:emotion>',
        es: '',
        fr: '',
        ja: '',
        hi: '',
        it: '',
        pt: ''
    },
    MORE_PRACTICE: {
        de: '',
        en: '<amazon:emotion name="excited" intensity="high">I think you need more practice! Ha ha ha!</amazon:emotion>',
        es: '',
        fr: '',
        ja: '',
        hi: '',
        it: '',
        pt: ''
    },
    NOT_BAD: {
        de: '',
        en: '<amazon:emotion name="excited" intensity="high">Not bad! That was better than I could do.</amazon:emotion>',
        es: '',
        fr: '',
        ja: '',
        hi: '',
        it: '',
        pt: ''
    },
    PRETTY_WELL: {
        de: '',
        en: '<amazon:emotion name="excited" intensity="low">I thought you did pretty well at that.</amazon:emotion>',
        es: '',
        fr: '',
        ja: '',
        hi: '',
        it: '',
        pt: ''
    },
    REMEMBER: {
        de: '',
        en: '<amazon:emotion name="excited" intensity="high">Remember, you can do anything for sixty seconds!</amazon:emotion>',
        es: '',
        fr: '',
        ja: '',
        hi: '',
        it: '',
        pt: ''
    },
    SOUNDED_HARD: {
        de: '',
        en: '<amazon:emotion name="excited" intensity="high">That one sounded like it was hard, keep it up!</amazon:emotion>',
        es: '',
        fr: '',
        ja: '',
        hi: '',
        it: '',
        pt: ''
    },
    TAKE_BREAK: {
        de: '',
        en: 'Don\'t forget to take a break and drink some water. Don\'t worry, I\'ll wait here!',
        es: '',
        fr: '',
        ja: '',
        hi: '',
        it: '',
        pt: ''
    },
    WELL_DONE: {
        de: '',
        en: '<amazon:emotion name="excited" intensity="high">Well done!</amazon:emotion>',
        es: '',
        fr: '',
        ja: '',
        hi: '',
        it: '',
        pt: ''
    },
};

module.exports = {
    getKeys: () => {
        return Object.keys(cheers);
    },
    getCheer: (key, lang) => {
        return cheers[key][lang];
    },
    getRandomCheer: () => {
        const cheerKeys = Object.keys(cheers);
        return cheerKeys[Math.floor(Math.random() * cheerKeys.length)]
    },
    getTranslations: (languageKey) => {
        const translations = {};
        for (let k in cheers) {
            if (cheers.hasOwnProperty(k)) {
                translations[k] = cheers[k][languageKey];
            }
        }
        return translations;
    }
};
