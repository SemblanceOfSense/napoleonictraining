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

    public getPathfindingParams(): AgentParameters {
        return {
            AgentRadius : 1,
            AgentCanJump : true,
        };
    }

    public getPaths(): Path[] {
        let pathList = new Array<Path>;
        for (let x of pathList) {
            pathList.push(PathfindingService.CreatePath(this.getPathfindingParams()));
        }
        print("Paths fetched!");
        return pathList;
    }

    public computePaths(pat: Path[]): void {
        let i: number;
        let p: Part[] = this.getParts();
        let paths: Path[] = pat;
        for (i = 0; i < paths.size(); i++) {
            if (i + 1 === paths.size()) {
                paths[i].ComputeAsync(p[i].Position, p[0].Position);
            } else {
                paths[i].ComputeAsync(p[i].Position, p[i + 1].Position);
            }
        }
        print("computed!");
    }

    public loop(): void {
        wait(7);
        while (true) {
            this.computePaths(this.getPaths());
            wait(1);
        }
    }
}
