import { Workspace, StarterPack, ServerStorage } from "@rbxts/services";

interface Workspace extends Instance {
    Firearm_Ammunition: Model;
    Firearms_Pack: Model;
    FirearmsSaves: Model;
}

interface StarterPack extends Instance {
    Carbine: Tool;
    Musket: Tool;
    Pistol: Tool;
    Rifle: Tool;
}

interface ServerStorage extends Instance {
    Dummy: Model & {
        Humanoid: Humanoid;
    };
}
