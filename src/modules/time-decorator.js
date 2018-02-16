
export function measureTime(target, key, desc) {
    let fn = desc.value, { name } = fn;
    desc.value = function () {
        console.time(name);
        let result = fn.apply(this, arguments);
        console.timeEnd(name);
        return result;
    };
}