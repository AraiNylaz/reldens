/**
 *
 * Reldens - EnemyObject
 *
 * This is an example object class, it extends from the NpcObject class and then define the specific parameters for the
 * behavior and animations.
 * The main point here is that this is just and example, and you could even create several NPCs and make them run any
 * kind of actions at any time. Here you can see a simple message but it could do literally anything.
 *
 */

const { NpcObject } = require('./npc-object');
const { ObjectsConst } = require('../constants');
const { NpcBattle } = require('../../actions/server/npc-battle');

class EnemyObject extends NpcObject
{

    constructor(props)
    {
        super(props);
        this.type = ObjectsConst.TYPE_ENEMY;
        // @NOTE: we could run different actions and enemies reactions based on the player action.
        // this.runOnAction = true;
        this.runOnHit = true;
        this.roomVisible = true;
        this.randomMovement = true;
        // assign extra public params:
        Object.assign(this.clientParams, {
            enabled: true,
            frameStart: 0,
            frameEnd: 3,
            repeat: -1,
            hideOnComplete: false,
            autoStart: true
        });
        this.battle = new NpcBattle();
    }

    onHit(props)
    {
        this.battle.start(props.objectBody, props.playerBody);
    }

}

module.exports.EnemyObject = EnemyObject;