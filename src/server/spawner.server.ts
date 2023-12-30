import { Workspace } from "@rbxts/services";
import { Dummy } from "./Dummy"

const dummies: Dummy[] = [];
for (var part of Workspace.GetDescendants) {
    if (part.Name == "spawnDummy") {
        const newDummy = new Dummy(part.Position);
        dummies.push(newDummy);
    }
}
