import {debounce, measureTime} from './debounce-decorator';

@superhero(false)
export class MyHeroClass {
    //
}

@superhero(true)
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