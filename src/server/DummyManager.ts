import { Dummy } from "./Dummy"

const dummyList: Array<Dummy> = [];

export function newDummy(v3: Vector3): Dummy {
    let obj: Dummy = new Dummy(v3);
    let num: number = dummyList.push(obj);
    obj.setName(""+num);
    return obj;
}
