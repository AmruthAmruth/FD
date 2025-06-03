const wm = new WeakMap();

let obj = { name: "Amruth" };

wm.set(obj, "some secret data");

console.log(wm.get(obj)); // "some secret data"

obj = null; 