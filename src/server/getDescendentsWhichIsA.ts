import { Workspace } from "@rbxts/services";

export function getDescendantsWhichIsA<T extends keyof Instances>(parent: Instance, className: T): Instances[T][] {
    return parent.GetDescendants().filter((descendant): descendant is Instances[T] => descendant.IsA(className));
}
