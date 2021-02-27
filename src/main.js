import roleUpgrader from 'rol_upgrader'
import roleBuilder from 'rol_builder'
import { ManagementsCreeps } from 'ManagementsCreeps'
import roleHarvester from 'rol_harvester'

module.exports.loop = function () {
    ManagementsCreeps.run()
    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name]
            console.log('Clearing non-existing creep memory:', name)
        }
    }
    /*
    var tower = Game.getObjectById('d2e803405f31de60c81af76b');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }
*/
    for (var name in Game.creeps) {
        var creep = Game.creeps[name]
        if (creep.memory.role === 'harvester') {
            roleHarvester.run(creep)
        }
        if (creep.memory.role === 'upgrader') {
            roleUpgrader.run(creep)
        }
        if (creep.memory.role === 'builder') {
            roleBuilder.run(creep)
        }
    }
}
