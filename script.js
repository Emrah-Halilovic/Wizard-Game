function Heroji(name, health,oruzije){
    this.name = name;
    this.health = health;
    this.oruzije = oruzije;

    this.getHealth = function(){
        console.log(`Name: ${name} - Health: ${health} - Oruzije: ${oruzije}`)
    }
}

let heroj1 = new Heroji("Čarobnjak", "150" , "Mač i Koplje");
let heroj2 = new Heroji("Mačevalac", "100", "čarolija");

heroj1.getHealth();
heroj2.getHealth();

var max = 2;

function Weapon (maxOruzije){
    this.maxOruzije = maxOruzije;
    this.maksOruzije = function(){
        if(max > 2){
            alert("You allerady have enought weapons")
            
        }
        else if(max == 0){
            console.error("NoWeapon");

        }
        else{
            console.log("Let`s do it")
        }
    }
}

let weapon1 = new Weapon (0)

weapon1.maksOruzije()

function Monsters(cudoviste, napad){
    this.cudoviste = cudoviste
    this.napad = napad;
    this.napad = napad;
    this.kolikoDamaga = function(){
        console.log(`Name of the Monster: ${cudoviste} - Monster attack ability: ${napad} - Monster attack ability: ${napad}`)

    }
}

let cudoviste1 = new Monsters("Zmaj", "Udarac - 5 healtha", "Bljuje vatru - 20 heltha")
let cudoviste2 = new Monsters("Pauk", "Udarac - 5 healtha" , "Ujed - 8 heltha");

cudoviste1.kolikoDamaga()

function skidanjeHeltha(jacinaOruzija){
    this.jacinaOruzija = jacinaOruzija;
    this.weaponStrenght = function(){
        console.log(`Jacina ${jacinaOruzija}˘ `)
    }
}
let wep = new skidanjeHeltha("Čarolije je 20 healtha");
let wep2 = new skidanjeHeltha("Mač 10 heltha");
let wep3 = new skidanjeHeltha("koplje 15 heltha");


wep.weaponStrenght()

var nasHeroj = Math.random() * 100;
var Hero = "Mačevalac";
var Monsst = "Čudoviste";


function fight(){
    if(nasHeroj < 50){
        console.log(Hero +" napada")
        console.log("Heroj je pobjedio!!!")
    }
    else if(nasHeroj>50){
        console.log(Monsst +" napada")
        console.log("Cudoviste je pobjedilo")
    }
}
fight()

















