import sum from './module';
import $ from 'jquery';

let summy = sum(5, 6);
console.log(summy);

/*window.onload = function() {
    // all of your code goes in here
    // it runs after the DOM is built

    //document.getElementById("head").innerHTML = summy;
    $('#head').text(summy + 9);
};*/

@superhero(false)
class MyHeroClass {
    //
}

@superhero(true)
class MySuperHeroClass {
    //
}

function superhero(isSuperHero) {
    return function (target) {
        target.isSuperHero = isSuperHero;
    }
}

console.log(MyHeroClass.isSuperHero);
console.log(MySuperHeroClass.isSuperHero);



