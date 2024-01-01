import { ServerStorage, Workspace } from "@rbxts/services";
import { Dummy } from "./Dummy"
import { Runner } from "./Runner"
import { getDescendantsWhichIsA } from "./getDescendentsWhichIsA";
import { newDummy, newRunner } from "./DummyManager";

const descendants: Array<Part> = getDescendantsWhichIsA(Workspace, "Part")
let fold: Folder = ServerStorage.runnerTurns;

descendants.forEach( (element) => {
    if (element.Name === "spawnDummy") {
        let thisdummy: Dummy = newDummy(element.Position);
    }
    if (element.Name === "spawnRunner") {
        let thisrunner: Runner = newRunner(element.Position, fold);
    }
})
