import sum from './module';
import $ from 'jquery';

let summy = sum(5, 6);

window.onload = function() {
    // all of your code goes in here
    // it runs after the DOM is built

    //document.getElementById("head").innerHTML = summy;
    $('#head').text(summy + 9);
};

