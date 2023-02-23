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
}