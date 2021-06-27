export const Roads = {
    build(position) {
        Game.spawns['Spawn1'].room.createConstructionSite(position.x, position.y, STRUCTURE_ROAD)
    },

    repair(creep) {
        let roadToRepair = creep.pos.findClosest(FIND_STRUCTURES, {
            filter: function (object) {
                return object.structureType === STRUCTURE_ROAD && (object.hits > object.hitsMax / 3)
            }
        })

        if (roadToRepair) {
            creep.moveTo(roadToRepair)
            creep.repair(roadToRepair)

            // perhaps check the results again?

        }
    }

}
