let count = 0;
let mist = 1;
let timeLeft = 20;

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();

    document.querySelector("#count").innerHTML = count;

    document.querySelector("#mist").innerHTML = mist;
}

function showStart() {
    console.log("show start");

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");

    document.querySelector("#play").addEventListener("click", hideStart);

    document.querySelector("#game_elements").classList.add("hide");

}

function hideStart() {
    console.log("hide start");

    document.querySelector("#play").classList.remove("pulse");

    document.querySelector("#play").removeEventListener("click", hideStart);
    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", startGame);

    document.querySelector("#game_elements").classList.remove("hide");
}

function startGame() {
    console.log("start game");

    timeLeftFc();
    document.querySelector("#start").classList.remove("fade_out");
    document.querySelector("#start").removeEventListener("animationend", startGame);

    document.querySelector("#start").classList.add("hide");

    //Elementer
    //document.querySelector("#paraply").addEventListener("click", paraplyClick);

    //paraply();
    document.querySelector("#reset").addEventListener("click", tabtLiv);

    document.querySelector("#sur_sky").addEventListener("click", surSkyClick);

    document.querySelector("#sol").addEventListener("click", solClick);
    document.querySelector("#solbriller").addEventListener("click", solbrillerClick);

    document.querySelector("#is").addEventListener("click", isClick);

    if (document.querySelector("#sol").classList.contains("hide")) {
        document.querySelector("#sol").classList.remove("hide")
    }


}

//function paraply() {
//    console.log("paraply_kaldt")
//    document.querySelector("#paraply").addEventListener("click", paraplyClick);
//
//    //document.querySelector("#paraply").classList.remove("hide");
//
//}

function paraplyClick() {
    console.log("minus_point");
    console.log("minus_mist")
    //point = point + 1;
    count = count - 5;
    //point++; fortæller det samme som point = point +1;
    mist = mist - 1;

    if (mist < 1) {
        gameover();
    }

    console.log(count);

    document.querySelector("#count").innerHTML = count;

    console.log(this);
    this.classList.add("hide");
    this.removeEventListener("click", paraplyClick);


    console.log(mist);

    document.querySelector("#mist").innerHTML = mist;
    document.querySelector("#paraply").remove();

    //paraply();
}


function surSkyClick() {
    console.log("minus_point");
    console.log("minus_mist")
    //point = point + 1;
    count = count - 5;
    mist = mist - 1;

    tabtLiv();

    //point++; fortæller det samme som point = point +1;
    console.log(count);

    document.querySelector("#count").innerHTML = count;

    console.log(this);
    this.classList.add("hide");
    this.removeEventListener("click", surSkyClick);

    document.querySelector("#mist").innerHTML = mist;


}

function solClick() {
    console.log("plus_point");
    //point = point + 1;
    count++;
    //point++; fortæller det samme som point = point +1;
    console.log(count);

    document.querySelector("#count").innerHTML = count;

    console.log(this);
    this.classList.add("hide");

    this.removeEventListener("click", solClick);

    document.querySelector("#sol").classList.toggle("position" + Math.floor((Math.random() * 5) + 1));
}

function solbrillerClick() {
    console.log("plus_point");
    //point = point + 1;
    count++;
    //point++; fortæller det samme som point = point +1;
    console.log(count);

    document.querySelector("#count").innerHTML = count;

    console.log(this);
    this.classList.add("hide");
    this.removeEventListener("click", solbrillerClick);
}

function isClick() {
    console.log("plus_point");
    //point = point + 1;
    count++;
    //point++; fortæller det samme som point = point +1;
    console.log(count);

    document.querySelector("#count").innerHTML = count;

    console.log(this);
    this.classList.add("hide");

    this.removeEventListener("click", isClick);

    document.querySelector("#is").classList.toggle("position" + Math.floor((Math.random() * 5) + 1));

}

function nytElement() {

    document.querySelector("#is").classList.toggle("position" + Math.floor((Math.random() * 5) + 1));


    document.querySelector("#is").classList.remove("hide");
}


function timeLeftFc() {
    console.log("timeLeftFc timeLeft er " + timeLeft);

    if (timeLeft > 0) {
        timeLeft--;

        setTimeout(timeLeftFc, 1000);

    } else {
        gameover();
    }
}

function tabtLiv() {
    console.log("tabt liv");

    if (mist < 1) {
        gameover();

        document.querySelector("#reset").addEventListener("click", tabtLivReset);

    }
}

function tabtLivReset() {
    timeLeft = 5;
    mist = 1;
}

function gameover() {
    console.log("spil slut");
    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#game_elements").classList.add("hide");

    document.querySelector("#reset").addEventListener("click", reset);

}

function reset() {
    document.querySelector("#gameover").classList.add("hide");
    timeLeft = 5;
    mist = 1;
    showStart();
}
