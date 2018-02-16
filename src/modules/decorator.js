import {measureTime} from './time-decorator';

@superhero(false)
export class MyHeroClass {
    //
}

@superhero(true)
@custommeta({
    title: "Sample title.",
    description: "Sample description."
})
export class MySuperHeroClass {

    @measureTime
    calculate() {
        return "Calculated..";
    }
}

function superhero(isSuperHero) {
    return function (target) {
        target.isSuperHero = isSuperHero;
    }
}

function custommeta(metaObject) {
    return function (target) {
        Object.keys(metaObject).forEach(
            key => target.prototype[key] = metaObject[key]
        )
    }
}