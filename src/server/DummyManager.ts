import { Dummy } from "./Dummy"
import {Runner} from "./Runner";

const dummyList: Array<Dummy> = [];
const runnerList: Array<Runner> = [];

export function newDummy(v3: Vector3, v32: Vector3): Dummy {
    let obj: Dummy = new Dummy(v3, v32);
    let num: number = dummyList.push(obj);
    return obj;
}

export function newRunner(v3: Vector3, v32: Vector3, folder: Folder): Runner {
    let obj: Runner = new Runner(v3, v32, folder);
    let num: number = runnerList.push(obj);
    return obj;
}

export function startLoops(): void {
    for (let x of runnerList) {
        let a = coroutine.create(function() {
            x.loop();
        });
        coroutine.resume(a);
    }
}
