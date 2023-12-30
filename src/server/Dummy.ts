import { Workspace, ServerStorage, StarterPack } from "@rbxts/services";

class Dummy {
    private position: Vector3;
    private model: Model;
    private humanoid: Humanoid;

    public constructor(pos: Vector3) {
        this.position = pos;

        this.model = ServerStorage.Dummy;
        this.model.Parent = Workspace;

        this.humanoid = this.model.Humanoid;
    }
}
