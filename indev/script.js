import { beginnerMath } from "./beginner/beginner.js";

var mathMod = new beginnerMath();

document.getElementById('1p1').innerHTML = mathMod.add(1, 1);
document.getElementById('10t50').innerHTML = mathMod.multiply(10, 50);
document.getElementById('60s20').innerHTML = mathMod.subtract(60, 20);
document.getElementById('100d50').innerHTML = mathMod.divide(100, 50);