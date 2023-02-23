$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fungusHP = 100;
let AP = 100;

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    //listener for attack-btn arcane-sceptre
    $('.arcane-sceptre').on('click', arcaneAttack);
    //listener for attack-btn entangle
    $('.entangle').on('click', entangleAttack); 
    //listener for attack-btn dragon-blade
    $('.dragon-blade').on('click', dragonBladeAttack);
    //listener for attack-btn star-fire
    $('.star-fire').on('click', starFireAttack);
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


function arcaneAttack() {
    console.log('in arcaneAttack');
    //remove 14 HP from fungus
    fungusHP = fungusHP - 14;
    if (fungusHP <= 0) { //check if fungusHP is <= zero and set to zero if true
        fungusHP = 0;
        monsterDead();   //fungus is dead
    }
    //remove 12 AP
    AP = AP - 12;
    if (AP < 0) {   //check if AP is below zero and set to zero if true
        AP = 0;
        outOfAP();  //ran out of AP
    }
    renderAPHP();
}

function entangleAttack() {
    console.log('in entangleAttack');
    //remove 9 HP from fungus
    fungusHP = fungusHP - 9;
    if (fungusHP <= 0) { //check if fungusHP is <= zero and set to zero if true
        fungusHP = 0;
        monsterDead();   //fungus is dead
    }
    //remove 23 AP
    AP = AP - 23;
    if (AP < 0) {   //check if AP is below zero and set to zero if true
        AP = 0;
        outOfAP();  //ran out of AP
    }

    renderAPHP();
}

function dragonBladeAttack() {
    console.log('in dragonBladeAttack');
    //remove 47 HP from fungus
    fungusHP = fungusHP - 47;
    if (fungusHP <= 0) { //check if fungusHP is <= zero and set to zero if true
        fungusHP = 0;
        monsterDead();   //fungus is dead
    }
    //remove 38 AP
    AP = AP - 38;
    if (AP < 0) {   //check if AP is below zero and set to zero if true
        AP = 0;
        outOfAP();  //ran out of AP
    }
    renderAPHP();
}

function starFireAttack() {
    console.log('in starFireAttack');
    //remove 25 HP from fungus
    fungusHP = fungusHP - 25;
    if (fungusHP <= 0) { //check if fungusHP is <= zero and set to zero if true
        fungusHP = 0;
        monsterDead();   //fungus is dead
    }
    //remove 33 AP
    AP = AP - 33;
    if (AP < 0) {   //check if AP is below zero and set to zero if true
        AP = 0;
        outOfAP();  //ran out of AP
    }
    renderAPHP();
}

function renderAPHP() { //update AP and HP on the DOM
    //render HP
    $('.hp-text').html(fungusHP);
    //render AP
    $('.ap-text').html(AP);
}

function monsterDead() {
    //remove walk class and add dead class to enemy
    $('.walk').removeClass("freaky-fungus walk").addClass("freaky-fungus dead");
}

function outOfAP() {
    //remove walk class and add jump class to enemy
    $('.walk').removeClass("freaky-fungus walk").addClass("freaky-fungus jump");
    //disable attack buttons
    $('.attack-btn').prop("disabled", true);
}