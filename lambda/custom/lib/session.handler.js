module.exports = {
    getSession: (handlerInput) => {
        // return {progress: {exercises: []}}; // for testing
        return handlerInput.attributesManager.getSessionAttributes();
    },
    setSession: (handlerInput, session) => {
        handlerInput.attributesManager.setSessionAttributes(session);
    }
};
