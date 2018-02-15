@superhero(false)
export class MyHeroClass {
    //
}

@superhero(true)
export class MySuperHeroClass {
    //
}

function superhero(isSuperHero) {
    return function (target) {
        target.isSuperHero = isSuperHero;
    }
}