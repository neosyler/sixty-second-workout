const assemble = (key, langKey) => {
    const before = workouts[key].before[langKey];
    const workout = workouts[key].workout[langKey];
    const after = workouts[key].after[langKey];
    return `${before} ${workout} ${after}`;
};

const langKeys = {
    de: 'german',
    en: 'english',
    es: 'spanish',
    fr: 'french',
    hi: 'hindi',
    it: 'italian',
    ja: 'japanese',
    pt: 'portuguese'
};

const workouts = {
    ALTERNATING_LUNGES: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'alternating lunges',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    BALANCE_LEFT_LEG: {
        before: {
            de: '',
            en: 'see if you can',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'balance on your left leg',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'for',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    BALANCE_RIGHT_LEG: {
        before: {
            de: '',
            en: 'see if you can',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'balance on your right leg',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'for',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    BICYCLE_CRUNCHES: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'bicycle crunches',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    BURPEES: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'burpees',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    BUTT_LIFTS: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'butt lifts',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    DONKEY_KICKS: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'donkey kicks',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    HIGH_KNEES: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'high knees',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    JOG_IN_PLACE: {
        before: {
            de: '',
            en: '',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'jog in place',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'for',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    JUMPING_JACKS: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'jumping jacks',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    LATERAL_LUNGES: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'lateral lunges',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    MOUNTAIN_CLIMBERS: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'mountain climbers',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    PLANK: {
        before: {
            de: '',
            en: 'hold a',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'plank',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'for',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    PLANKS_HIP_DIPS: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'planks with hip dips',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    PUSH_UPS: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'push ups',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    REVERSE_LUNGES: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'reverse lunges',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    RUN_IN_PLACE: {
        before: {
            de: '',
            en: '',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'run in place',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'for',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    RUSSIAN_TWISTS: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'russian twists',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    SIDE_CRUNCHES: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'side crunches',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    SIDE_PLANK: {
        before: {
            de: '',
            en: 'hold a',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'side plank',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'for',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    SIT_UPS: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'sit ups',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    SKATER_SQUATS: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'skater squats',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    SUPERMAN: {
        before: {
            de: '',
            en: 'do the',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'superman',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'for',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    TOE_REACHES: {
        before: {
            de: '',
            en: 'see how many',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'toe reaches',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'you can do in',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    },
    WALL_SIT: {
        before: {
            de: '',
            en: 'do a',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        workout: {
            de: '',
            en: 'wall sit',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        },
        after: {
            de: '',
            en: 'for',
            es: '',
            fr: '',
            ja: '',
            hi: '',
            it: '',
            pt: ''
        }
    }
};

const completed = {};

function pickRandomWorkout(exercises) {
    const workoutKeys = Object.keys(workouts);
    const workoutKey = workoutKeys[Math.floor(Math.random() * workoutKeys.length)];

    if (exercises.includes(workoutKey)) {
        completed[workoutKey] = workouts[workoutKey];
        delete workouts[workoutKey];
        return pickRandomWorkout(exercises);
    } else if (workoutKeys.length === 0) {
        for(let w in completed) {
            if (completed.hasOwnProperty(w)) {
                workouts[w] = completed[w];
                delete completed[w];
            }
        }
        return false;
    } else {
        return workoutKey;
    }
}

module.exports = {
    getRandomWorkoutKey: (exercises) => {
        return pickRandomWorkout(exercises);
    },

    getKeys: () => {
        return Object.keys(workouts);
    },

    getTranslations: (languageKey) => {
        const translations = {};

        if (languageKey) {
            translations[languageKey] = {};
            for(let w in workouts) {
                if (workouts.hasOwnProperty(w)) {
                    translations[languageKey][w] = assemble(w, languageKey);
                }
            }
            return translations[languageKey];
        } else {
            for (let l in langKeys) {
                if (langKeys.hasOwnProperty(l)) {
                    translations[l] = {};
                    for (let w in workouts) {
                        if (workouts.hasOwnProperty(w)) {
                            translations[l][w] = assemble(w, l);
                        }
                    }
                }
            }
        }

        return translations;
    }
};
