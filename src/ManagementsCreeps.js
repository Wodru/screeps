const minHarvesters = 2

const ManagementsCreeps = {
    run() {
        let harvesters = _.filter(
            Game.creeps,
            (creep) => creep.memory.role === 'harvester'
        )
        if (
            harvesters.length < 2 &&
            Game.spawns['Spawn1'].spawnCreep(
                [WORK, CARRY, MOVE],
                'harvester' + Game.time,
                { dryRun: true }
            ) === 0
        ) {
            let newName = 'Harvester' + Game.time
            console.log('Spawning new harvester: ' + newName)
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName, {
                memory: { role: 'harvester' },
            })
        }
        let haveMinCarvester = harvesters.length >= minHarvesters

        let upgrader = _.filter(
            Game.creeps,
            (creep) => creep.memory.role === 'upgrader'
        )
        if (
            haveMinCarvester &&
            upgrader.length < 2 &&
            Game.spawns['Spawn1'].spawnCreep(
                [WORK, CARRY, MOVE],
                'upgrader' + Game.time,
                { dryRun: true }
            ) === 0
        ) {
            let newName = 'Upgrader' + Game.time
            console.log('Spawning new upgrader: ' + newName)
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName, {
                memory: { role: 'upgrader' },
            })
        }

        let builder = _.filter(
            Game.creeps,
            (creep) => creep.memory.role === 'builder'
        )
        if (
            haveMinCarvester &&
            builder.length < 6 &&
            Game.spawns['Spawn1'].spawnCreep(
                [WORK, WORK, CARRY, CARRY, MOVE],
                'builder' + Game.time,
                { dryRun: true }
            ) === 0
        ) {
            let newName = 'Builder' + Game.time
            console.log('Spawning new builder: ' + newName)
            Game.spawns['Spawn1'].spawnCreep(
                [WORK, WORK, CARRY, MOVE],
                newName,
                {
                    memory: { role: 'builder' },
                }
            )
        }
    },
}
export default ManagementsCreeps
