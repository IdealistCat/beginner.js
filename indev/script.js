import { beginnerMath } from "./beginner/beginner.js";

var mathMod = new beginnerMath();

var q1 = document.getElementById('1p1');
q1.innerHTML = mathMod.add(1, 1).toString();

var q2 = document.getElementById('10t50');
q2.innerHTML = mathMod.multiply(10, 50).toString();

var q3 = document.getElementById('60s20');
q3.innerHTML = mathMod.subtract(60, 20).toString();

var q4 = document.getElementById('100d50');
q4.innerHTML = mathMod.divide(100, 50).toString();