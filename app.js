"use strict"

const bulbs = document.getElementsByClassName('bulb');
const run = document.getElementById('run');
const stop = document.getElementById('stop');

const on = function() {
    for (let i = 0; i < bulbs.length; i++) {
        bulbs[i].removeAttribute('style');
        bulbs[i].animationPlayState = 'running';
    }
}

const off = function() {
    for (let i = 0; i < bulbs.length; i++) {
        bulbs[i].style.animation = 'none';
        bulbs[i].style.background = '#301934';
    }
}

run.addEventListener('click', on);
stop.addEventListener('click', off);