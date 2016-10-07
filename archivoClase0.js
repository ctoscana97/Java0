40+2
var point = { x: 1, y: 1 };
point
point.x
console.log(40+2)
console.log(40+2);
console.log(point);
console.log('Coordenada X:', point.x);
node prueba.js
var bool=true;
var text = 'I want to be a pirate!'
var object = {};
var code = function () {return42;}
typeof true;
tipeof 1234.5
tipeof 1234.5;
tipeof 1234,5;
tipeof 1234;
typeof 1234;
typeof 'I want to be a pirate!';
typeof {};
typeof function () {return42;}
var x;
typeof x;
x=5;
typeof x;
var point = { 'x': 10, 'y': 15 };
var point = { x: 10, y: 10 };
point['x'];
point['y'];
point.x;
point.y;
point.x = 0;
point.y = 0;
var label = point.label;
point.label = 'origin';
point;
var menu = ['Attack', 'Defense', 'Inventory'];
menu[0];
menu[1];
menu[2];
menu.lenght;
menu.length;
menu.push('Magic');
menu.pop();
menu = ['Attack', 'Defense', 'Inventory'];
menu.splice(2, 0, 'Magic');
menu
menu.splice(2, 2, 'Ench. Inventory');
menu
menu.splice(0, 0, 'Wait');
menu
menu[0] = 'Special';
menu
menu;
menu.length;
var item = menu [10]
typeof item;
menu [10] = 'secret';
menu;
menu.length;
var obj = {};
var arr = [];
typeof obj;
typeof arr;
Array.isArray(obj);
Array.isArray(arr);
function getNextAliveEnemy() {
var nextEnemy;
if (aliveEnemies.length > 0) {
  nextEnemy = aliveEnemies[0];
  }
else {
  nextEnemy = null;
  }
return nextEnemy;
}
var hero = { sword: null, shield: null };
hero.sword = { attack: 20, magic: 5 };
hero.sword = null;
hero.sowrd
hero.sword
var hero = {
name: 'Link',
life: 100,
weapon: { kind: 'sword', power: 20, magicPower: 5 },
defense: { kind: 'shield', power: 5, magicPower: 0 },
// Inventario por slots. Dos slots vacion y una último con 5 pociones.
inventory: [
{ item: null, count: 0},
{ item: null, count: 0},
{ item: { kind: 'potion', power: 15 }, count: 5}
]
};
hero.name;
hero.weapon.kind;
hero.inventory[0];
hero.inventory[0].item;
hero.inventory[2].item.power;
"Hola" === "Hola";
"Hola" !== "hola"
true===true
;
123 === 123.0;
123 === 122 + 1;
undefined===undefined;
({} !== {});
({} !== []);
[] !== [];
[1, 2, 3] !== [1, 2, 3];
null === null;
var obj = {};
var sameObj = obj;
var another = {};
sameObj === obj;
sameObj !== another;
var enemy = {
graphic: 'specie01.png',
currentDirection: 'right',
position: { x: 10, y: 10 },
score: 40
};
enemy.position.x = 100;
var enemy = {
_graphic: 'specie01.png',
_currentDirection: 'right',
_position: { x: 10, y: 10 },
_score: 40
};
enemy._position.x = 100;
var enemy = {
_graphic: 'specie01.png',
_currentDirection: 'right',
_position: { x: 10, y: 10 },
_score: 40,

moveLeft: function () { console.log('Going left!'); },
moveRight: function () { console.log('Going right!'); },
advance: function () { console.log('Marching forward!'); },
shoot: function () { console.log('PICHIUM!'); } // (es un láser)
};
enemy.shoot();
enemy.moveLeft();
enemy.moveLeft();
enemy.advance();
enemy['shoot']();
enemy['shoot']();
enemy.shoot();
enemy.shoot = function () { console.log('PAÑUM!'); };
enemy.shoot();
enemy;
enemy.moveLeft();
enemy;
enemy.moveLeft = function () { this._position.x -= 2; };
enemy.moveRight = function () { this._position.x += 2; };
enemy.advance = function () { this._position.y += 2; };
enemy;
enemy.moveLeft();
enemy;
function inspect() {
// sólo inspecciona this
console.log('Tipo:', typeof this);
console.log('Valor:', this);
}
var ship1 = { name: 'T-Fighter', method: inspect }
var ship2 = { name: 'X-Wing', method: inspect };
ship1.method();
ship2.method();
inspect();
var onlyNameShip = { name: 'Death Star' };
inspect.apply(onlyNameShip);
enemy.shoot;
disparo: function () { ;}
var enemy = {
_graphic: 'specie01.png',
_currentDirection: 'right',
_position: { x: 10, y: 10 },
_score: 40,

moveLeft: function () { console.log('Going left!'); },
moveRight: function () { console.log('Going right!'); },
advance: function () { console.log('Marching forward!'); },
shoot: function () { console.log('PICHIUM!'); } // (es un láser)


var bala = {vel: 30, tamanyo:3, danyo:15, direccion:'izquierda', explosionEnArea: false, teledireccion: true;}
var bala = {vel: 30, tamanyo:3, danyo:15, direccion:'izquierda', explosionEnArea: false, teledireccion: true};
function disparo() {  }
function esHoraDeDisparar(){ console.log('Una bala ha sido disparada!'); }
function disparo() {esHoraDeDisparar(), if (bala.explosionEnArea === false){console.log('Shhhiuuuuum)'} if (bala.explosionEnArea=== true){console.log('PUUUUUUUUUMMMMM')} }
function disparo() {esHoraDeDisparar(), if (bala.explosionEnArea === false){console.log('Shhhiuuuuum)'}, if (bala.explosionEnArea=== true){console.log('PUUUUUUUUUMMMMM')} }
function disparo() {esHoraDeDisparar(), if (bala.explosionEnArea === false){console.log('Shhhiuuuuum)'}, if (bala.explosionEnArea=== true){console.log('PUUUUUUUUUMMMMM')}; }
function disparo() {esHoraDeDisparar(), if (bala.explosionEnArea === false){console.log('Shhhiuuuuum)'}, if (bala.explosionEnArea=== true){console.log('PUUUUUUUUUMMMMM')}; }
function disparo() {esHoraDeDisparar(), if (bala.explosionEnArea === false){console.log('Shhhiuuuuum)'}, if (bala.explosionEnArea=== true){console.log('PUUUUUUUUUMMMMM')} }
function disparo() {esHoraDeDisparar(), if (bala.explosionEnArea === false){console.log('Shhhiuuuuum');}, if (bala.explosionEnArea=== true){console.log('PUUUUUUUUUMMMMM');} }
function disparo() {esHoraDeDisparar(), if (bala.explosionEnArea === false){console.log('Shhhiuuuuum)';}, if (bala.explosionEnArea=== true){console.log('PUUUUUUUUUMMMMM');} }
disparo() = function () {esHoraDeDisparar(), if (bala.explosionEnArea === false){console.log('Shhhiuuuuum)';}, if (bala.explosionEnArea=== true){console.log('PUUUUUUUUUMMMMM');} }
disparo() = function () {esHoraDeDisparar(), if (bala.explosionEnArea === false){console.log('Shhhiuuuuum');} else if (bala.explosionEnArea=== true){console.log('PUUUUUUUUUMMMMM');} }
function disparo() {esHoraDeDisparar(); if (bala.explosionEnArea === false){console.log('Shhhiuuuuum');} else if (bala.explosionEnArea === true){console.log('PUUUUUUUUUMMMMM');} }
disparo ()
