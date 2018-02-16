import sum from './modules/math';
import $ from 'jquery';
import {MyHeroClass, MySuperHeroClass} from './modules/decorator';

let summy = sum(5, 6);

if(typeof window !== 'undefined'){
    window.onload = function() {
        // all of your code goes in here
        // it runs after the DOM is built

        //document.getElementById("head").innerHTML = summy;
        $('#head').text(summy + 9);
    };
}

// Decorator example
console.log(MyHeroClass.isSuperHero);
console.log(MySuperHeroClass.isSuperHero);

let superHero = new MySuperHeroClass();
console.log(superHero.calculate());
console.log(superHero.title);



