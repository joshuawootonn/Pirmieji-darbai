import { getRobots } from "./fetch.js";
import { createTable } from "./createTable.js";
import { createVIPCheckbox } from "./createVIPcheckbox.js";

const robots = await getRobots();

createTable(robots);

createVIPCheckbox(robots);
