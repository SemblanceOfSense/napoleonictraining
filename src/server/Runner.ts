import { Dummy } from "./Dummy"
import { getDescendantsWhichIsA } from "./getDescendentsWhichIsA";
import { PathfindingService } from "@rbxts/services";

export class Runner extends Dummy {
    private folder: Folder;
    private parts: Part[];

    constructor(pos: Vector3, rot: Vector3, fold: Folder) {
        print("Runner Spawned");
        super(pos, rot);
        print("Continued");
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
        let animator: Animator = this.getHumanoid().WaitForChild("Animator") as Animator;
        let walkTrack: Animation = this.getModel().WaitForChild("WalkAnim") as Animation;
        let runAnimTrack: AnimationTrack = animator.LoadAnimation(walkTrack);
        runAnimTrack.Play();
        while (true) {
            for (let x of this.getParts()) {
                let human: Humanoid = this.getHumanoid();
                human.MoveTo(x.Position);
                human.MoveToFinished.Wait();
            }
        }
    }
}
