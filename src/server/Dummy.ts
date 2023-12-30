import { Workspace, ServerStorage, StarterPack } from "@rbxts/services";

export class Dummy {
    private model: Model;
    private humanoid: Humanoid;
    private humanoidRootPart: Part;

    public constructor(pos: Vector3) {
        this.model = ServerStorage.Dummy.Clone();
        this.model.Parent = Workspace;

        this.humanoid = this.model.WaitForChild("Humanoid") as Humanoid;
        this.humanoidRootPart = this.model.WaitForChild("HumanoidRootPart") as Part;
        this.tp(pos);
    }

    public getPosition(): Vector3 {
        return this.humanoidRootPart.Position;
    }

    public getModel(): Model {
        return this.model;
    }

    public getHumanoid(): Humanoid {
        return this.humanoid;
    }

    public getHumanoidRootPart(): Part {
        return this.humanoidRootPart;
    }

    public tp(where: Vector3): void {
        this.humanoidRootPart.Position = where;
    }
}
