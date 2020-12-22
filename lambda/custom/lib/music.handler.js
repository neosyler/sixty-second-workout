const hoorays = {
    DRUM_CYMBAL_1: '<audio src="soundbank://soundlibrary/musical/amzn_sfx_drum_and_cymbal_01"/>',
    DRUM_CYMBAL_2: '<audio src="soundbank://soundlibrary/musical/amzn_sfx_drum_and_cymbal_02"/>',
    FIREWORKS_6: '<audio src="soundbank://soundlibrary/explosions/fireworks/fireworks_06"/>',
    FIREWORKS_11: '<audio src="soundbank://soundlibrary/explosions/fireworks/fireworks_11"/>',
    FIREWORKS_WHISTLES_1: '<audio src="soundbank://soundlibrary/impacts/amzn_sfx_fireworks_whistles_01"/>',
    FIREWORKS_WHISTLES_2: '<audio src="soundbank://soundlibrary/impacts/amzn_sfx_fireworks_whistles_02"/>',
    GAMESHOW_1: '<audio src="soundbank://soundlibrary/gameshow/gameshow_01"/>',
    CROWD_APPLAUSE_1: '<audio src="soundbank://soundlibrary/human/amzn_sfx_crowd_applause_01"/>',
    CROWDS_9: '<audio src="soundbank://soundlibrary/sports/crowds/crowds_09"/>',
    CROWD_CHEER_MED: '<audio src="soundbank://soundlibrary/human/amzn_sfx_crowd_cheer_med_01"/>',
    CROWD_EXCITED_CHEER: '<audio src="soundbank://soundlibrary/human/amzn_sfx_crowd_excited_cheer_01"/>',
};

module.exports = {
    getRandomHooray: () => {
        const hoorayKeys = Object.keys(hoorays);
        return hoorays[hoorayKeys[Math.floor(Math.random() * hoorayKeys.length)]];
    }
};
