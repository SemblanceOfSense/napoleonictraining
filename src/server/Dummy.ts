import { Workspace, ServerStorage, StarterPack } from "@rbxts/services";

export class Dummy {
    private model: Model;
    private humanoid: Humanoid;
    private primaryPart: Part;

    public constructor(pos: Vector3) {
        this.model = ServerStorage.Dummy.Clone();
        this.model.Parent = Workspace;

        this.humanoid = this.model.WaitForChild("Humanoid") as Humanoid;
        this.primaryPart = this.model.PrimaryPart as Part;
        this.tp(pos);
    }

    public getPosition(): Vector3 {
        return this.primaryPart.Position;
    }

    public getModel(): Model {
        return this.model;
    }

    public getHumanoid(): Humanoid {
        return this.humanoid;
    }

    public getPrimaryPart(): Part {
        return this.primaryPart;
    }

    public getName(): string {
        return this.model.Name;
    }

    public setName(input: string): void {
        this.model.Name = input;
    }

    public tp(where: Vector3): void {
        this.model.MoveTo(where);
    }
}
