import { ServerStorage, Workspace } from "@rbxts/services";
import { Dummy } from "./Dummy"
import { Runner } from "./Runner"
import { getDescendantsWhichIsA } from "./getDescendentsWhichIsA";
import { newDummy, newRunner, startLoops } from "./DummyManager";

const Dummies: Array<Part> = getDescendantsWhichIsA(Workspace.WaitForChild("Dummies") as Folder, "Part");
const Runners: Array<Part> = getDescendantsWhichIsA(Workspace.WaitForChild("Runners") as Folder, "Part");

Dummies.forEach( (element) => {
        let thisdummy: Dummy = newDummy(element.Position, element.Rotation);
        print("Dummy");
})

Runners.forEach( (element) => {
    let foldName: string = element.FindFirstChildOfClass("StringValue")!.Value;
    let fold: Folder = ServerStorage.WaitForChild(foldName) as Folder;
    let thisrunner: Runner = newRunner(element.Position, element.Rotation, fold);
    print("Runner");
})

startLoops();