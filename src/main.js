import roleUpgrader from './rol_upgrader'
import roleBuilder from './rol_builder'
import ManagementsCreeps from './ManagementsCreeps'
import roleHarvester from './rol_harvester'

export function loop() {
    ManagementsCreeps.run()
    for (let name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name]
            console.log('Clearing non-existing creep memory:', name)
        }
    }

    for (let name in Game.creeps) {
        let creep = Game.creeps[name]
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
