"use strict"

const run = document.querySelector('#run');
const stop = document.querySelector('#stop');

let bulbs = document.getElementsByClassName('bulb');

function dimBulbsDown() {
    for (let i = 0; i < bulbs.length; i++) {
        switch(window.getComputedStyle(bulbs[i],null).getPropertyValue('background-color')) {
            case 'rgb(45, 255, 45)':
                bulbs[i].classList.remove('animate-1');
                break;
            case 'rgb(255, 45, 45)':
                bulbs[i].classList.remove('animate-2');
                break;
            case 'rgb(252, 255, 45)':
                bulbs[i].classList.remove('animate-3');
                break;
            case 'rgb(45, 171, 255)':
                bulbs[i].classList.remove('animate-4');
                break;
            default:
                console.log(window.getComputedStyle(bulbs[i],null).getPropertyValue('background-color'));
        }
    }
}

function singleLoopBulbLightUp() {
    /*
    for (let i = 0; i < bulbs.length; i++) {
        switch(window.getComputedStyle(bulbs[i],null).getPropertyValue('background-color')) {
            case 'rgb(45, 255, 45)':
                bulbs[i].classList.add('animate-1');
                break;
            case 'rgb(255, 45, 45)':
                bulbs[i].classList.add('animate-2');
                break;
            case 'rgb(252, 255, 45)':
                bulbs[i].classList.add('animate-3');
                break;
            case 'rgb(45, 171, 255)':
                bulbs[i].classList.add('animate-4');
                break;
            default:
                console.log(window.getComputedStyle(bulbs[i],null).getPropertyValue('background-color'));
        }
    }
    */

    for (let i = 0; i < bulbs.length; i++) {
        lightBulbsUp(i);
    }
}

function lightBulbsUp(i) {
    setTimeout(function() {
        switch(window.getComputedStyle(bulbs[i],null).getPropertyValue('background-color')) {
            case 'rgb(45, 255, 45)':
                bulbs[i].classList.add('animate-1');
                break;
            case 'rgb(255, 45, 45)':
                bulbs[i].classList.add('animate-2');
                break;
            case 'rgb(252, 255, 45)':
                bulbs[i].classList.add('animate-3');
                break;
            case 'rgb(45, 171, 255)':
                bulbs[i].classList.add('animate-4');
                break;
            default:
                console.log(window.getComputedStyle(bulbs[i],null).getPropertyValue('background-color'));
        }
    }, 500 * i);
}


stop.addEventListener('click', dimBulbsDown);
run.addEventListener('click', singleLoopBulbLightUp);



