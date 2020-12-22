// cheer translator
const cheerTranslator = require('../translators/cheer.translator');
// session handler
const sessionHandler = require('./session.handler');
// workout translator
const workoutTranslator = require('../translators/workout.translator');
// music handler
const musicHandler = require('../lib/music.handler');
// html entities
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

/**
 * Countdown for specified number of seconds with specified break in between
 *
 * @param numSeconds
 * @param breakTime
 * @returns {string}
 */
function countDown(numSeconds) {
    return Array.apply(null, {length: numSeconds})
        .map((n, i) => {
            let breakTime;
            const cardinal = numSeconds - i;

            if (cardinal > 18) {
                breakTime = 0.1;
            } else if (cardinal > 14) {
                breakTime = 0.3;
            } else {
                breakTime = 0.43;
            }

            return `<say-as interpret-as="cardinal">${cardinal}</say-as><break time="${breakTime}s" />`
        }).join(' ');
}

module.exports = {
    random: (handlerInput, skippedLastWorkout) => {
        const toSpeak = [];
        const session = sessionHandler.getSession(handlerInput);
        const workout = workoutTranslator.getRandomWorkoutKey(session.progress.exercises);
        let speakReady;

        if (!workout) {
            // completed all the exercises
            speakReady = handlerInput.t('COMPLETED_MSG');
            toSpeak.push(speakReady);
            session.progress.exercises = [];
            session.progress.skipped = [];
        } else {
            const speakWorkout = handlerInput.t(workout);
            const speakCheer = handlerInput.t(cheerTranslator.getRandomCheer());
            const playHooray = musicHandler.getRandomHooray();
            const speakText = handlerInput.t('WORKOUT_MSG', {workout: speakWorkout});
            const speakCountdown = countDown(60);
            speakReady = handlerInput.t('READY_MSG', {cheer: speakCheer});

            if (skippedLastWorkout && session.progress.total > 0) {
                session.progress.total -= 1;
                session.progress.skippedTotal += 1;
                session.progress.skipped.push(session.progress.exercises[session.progress.exercises.length - 1]);
            } else {
                session.progress.total += 1;
                session.progress.exercises.push(workout);
            }

            sessionHandler.setSession(handlerInput, session);
            console.log(playHooray);

            toSpeak.push(speakText);
            toSpeak.push(speakCountdown);
            toSpeak.push(playHooray);
            toSpeak.push(speakReady);
        }

        return handlerInput.responseBuilder
            .speak(entities.decode(toSpeak.join(' ')))
            .reprompt(speakReady)
            .getResponse();
    }
};
