import { building, exhibit, manager, mergeProgramInformation, program } from './partial';

const setStrongHallProgram = mergeProgramInformation(building, manager);
const programInfo = setStrongHallProgram(program);
const exhibitInfo = setStrongHallProgram(exhibit);
