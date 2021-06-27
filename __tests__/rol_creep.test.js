
import { setup, mockGlobal, mockInstanceOf, mockStructure } from "screeps-test-helper";
setup(global);

mockGlobal<Game>('Game', {
    time: 123
});

const creep = mockInstanceOf<Creep>({
    moveTo: () => OK,
    store: {
        getFreeCapacity: () => 0
    },
    transfer: () => ERR_NOT_IN_RANGE
});

const spawn = mockStructure(STRUCTURE_SPAWN, {
    hits: 5000,
    hitsMax: 5000
});
