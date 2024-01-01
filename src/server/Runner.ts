import { Dummy } from "./Dummy"
import { getDescendantsWhichIsA } from "./getDescendentsWhichIsA";
import { PathfindingService } from "@rbxts/services";

export class Runner extends Dummy {
    private folder: Folder;
    private parts: Part[];

    constructor(pos: Vector3, fold: Folder) {
        super(pos);

        this.getModel().Name = "Runner";
        this.getPrimaryPart().Anchored = false;

        this.folder = fold;
        this.parts = this.folderList(fold);
    }

    public getFolder(): Folder {
        return this.folder;
    }

    public getParts(): Part[] {
        return this.parts;
    }

    public folderList(f: Folder): Part[] {
        return getDescendantsWhichIsA(f, "Part");
    }

    public loop(): void {
        wait(7);
        while (true) {
            for (let x of this.getParts()) {
                this.getHumanoid().MoveTo(x.Position);
            }
        }
    }
}
