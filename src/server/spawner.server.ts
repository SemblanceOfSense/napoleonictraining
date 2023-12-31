import { Workspace } from "@rbxts/services";
import { Dummy } from "./Dummy"
import { getDescendantsWhichIsA } from "./getDescendentsWhichIsA";
import { newDummy } from "./DummyManager";

const dummies: Dummy[] = [];
const descendants: Array<Part> = getDescendantsWhichIsA(Workspace, "Part")

descendants.forEach( (element) => {
    if (element.Name === "spawnDummy") {
        let thisdummy: Dummy = newDummy(element.Position);
    }
})
