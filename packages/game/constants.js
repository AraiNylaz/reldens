/**
 *
 * Reldens - game/constants
 *
 * Project constants and default data.
 * Here we use shortcuts since these are used for all the communications between server and client.
 *
 */

// constants:
module.exports.GameConst = {
    START_GAME: 's',
    CHANGED_SCENE: 'cs',
    RECONNECT: 'r',
    ROOM_GAME: 'room_game',
    SCENE_PRELOADER: 'ScenePreloader',
    PLAYER_STATS: 'ps',
    ICON_STATS: 'player-stats',
    CLIENT_JOINED: 'cj',
    UI: 'ui',
    TYPE_PLAYER: 'pj',
    GAME_OVER: 'go',
    BUTTON_OPTION: 'btn-opt',
    // movement:
    UP: 'up',
    LEFT: 'left',
    DOWN: 'down',
    RIGHT: 'right',
    STOP: 'stop',
    ACTION: 'action',
    BULLET: 'attack-bullet',
    POINTER: 'mp',
    ARROW_DOWN: 'ard',
    // collisions:
    COL_PLAYER: Math.pow(2,0),
    COL_ENEMY: Math.pow(2,1),
    COL_GROUND: Math.pow(2,2),
    // default data:
    FADE_DURATION: 1000,
    SPEED_SERVER: 180,
    // @TODO: implement player custom avatar.
    IMAGE_PLAYER: 'player',
    ATTACK: 'attack',
    HIT: 'hit',
    DEATH: 'death'
};
