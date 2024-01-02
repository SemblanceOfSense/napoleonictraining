import { Workspace, ServerStorage, StarterPack } from "@rbxts/services";

export class Dummy {
    private model: Model;
    private humanoid: Humanoid;
    private primaryPart: Part;
    private number: NumberValue;
    private rotation: Vector3;

    public constructor(pos: Vector3, rot: Vector3) {
        this.model = ServerStorage.Dummy.Clone();
        this.model.Parent = Workspace;
        this.number = this.model.WaitForChild("Number") as NumberValue;
        this.rotation = rot;

        this.humanoid = this.model.WaitForChild("Humanoid") as Humanoid;
        this.primaryPart = this.model.PrimaryPart as Part;
        this.tp(pos);
        this.setRotation(this.rotation);
    }

    public getPosition(): Vector3 {
        return this.primaryPart.Position;
    }

    public getCFrame(): CFrame {
        return this.getModel().GetPivot();
    }

    public setRotation(r: Vector3): void {
        let cframe: CFrame = this.getCFrame();
        this.getModel().PivotTo(cframe.mul(CFrame.Angles(math.rad(r.X), math.rad(r.Y), math.rad(r.Z))));
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

    public getNumber(): number {
        return this.number.Value;
    }

    public setNumber(num: number): void {
        this.number.Value = num;
    }

    public tp(where: Vector3): void {
        this.model.MoveTo(where);
    }
}
