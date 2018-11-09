let count = 0;
let mist = 3;
let timeLeft = 30;
let time = 30;
let showSettingsEffektSound = true;
let timeLeftTimeOut;


window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();

    document.querySelector("#count").innerHTML = count;

    document.querySelector("#mist").innerHTML = mist;

    document.querySelector("#time").innerHTML = "00: " +
        time;
}

function showStart() {
    console.log("show start");

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");

    document.querySelector("#play").addEventListener("click", hideStart);

    document.querySelector("#game_elements").classList.add("hide");

    document.querySelector("#settings").addEventListener("click", showSettings);

    document.querySelector("#time").classList.add("timeTell");

}

function timeTelling() {
    console.log("TimeTell");

    setTimeout(timeLeftFc, 1000);

}

function showSettings() {
    console.log("showSettings");
    document.querySelector("#settings_screen").classList.remove("hide");
    document.querySelector("#setting_music").addEventListener("click", toggleMusic);
    document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSounds);
    document.querySelector("#setting_close").addEventListener("click", hideSettings);
}

function hideSettings() {
    console.log("hideSettings");

    document.querySelector("#settings_screen").classList.add("hide");
    document.querySelector("#setting_close").removeEventListener("click", hideSettings);
    document.querySelector("#setting_music").removeEventListener("click", toggleMusic);
    document.querySelector("#setting_effekt_sound").removeEventListener("click", toggleSounds);
}

function hideStart() {
    console.log("hide start");

    document.querySelector("#play").classList.remove("pulse");

    document.querySelector("#play").removeEventListener("click", hideStart);
    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", startGame);

    document.querySelector("#game_elements").classList.remove("hide");

    document.querySelector("#musik").play();

}

function startGame() {
    console.log("start game");

    timeLeftFc();
    document.querySelector("#start").classList.remove("fade_out");
    document.querySelector("#start").removeEventListener("animationend", startGame);

    document.querySelector("#start").classList.add("hide");
    //Elementer
    document.querySelector("#paraply").addEventListener("click", paraplyClick);
    document.querySelector("#paraply").classList.add("paraply_ned");


    document.querySelector("#reset").addEventListener("click", tabtLiv);

    document.querySelector("#sur_sky").addEventListener("click", surSkyClick);
    document.querySelector("#sur_sky").classList.add("sky_ned");


    document.querySelector("#sol").addEventListener("click", solClick);
    document.querySelector("#sol").classList.add("sol_ned");

    document.querySelector("#solbriller").addEventListener("click", solbrillerClick);
    document.querySelector("#solbriller").classList.add("solbriller_ned");


    document.querySelector("#is").addEventListener("click", isClick);
    document.querySelector("#is").classList.add("is_ned");


    document.querySelector("#time").addEventListener("click", timeTelling);

    if (document.querySelector("#sol").classList.contains("hide")) {
        document.querySelector("#sol").classList.remove("hide")
    }
    setTimeout(solFrem, 1000);
    setTimeout(solbrillerFrem, 1000);
    setTimeout(isFrem, 1000);
    setTimeout(skyFrem, 1000);
    setTimeout(paraplyFrem, 1000);
}

function solFrem() {
    console.log("Sol Frem");
    if (document.querySelector("#sol").classList.contains("sol_ned")) {

    } else {
        document.querySelector("#sol").className = "";
        document.querySelector("#sol").classList.add("sol_ned");
        document.querySelector("#sol").classList.add("position" + Math.floor((Math.random() * 5) + 1));
    }
    setTimeout(solFrem, 1000);
    document.querySelector("#sol").addEventListener("click", solClick);

}

function solbrillerFrem() {
    console.log("Solbriller Frem");
    if (document.querySelector("#solbriller").classList.contains("solbriller_ned")) {

    } else {
        document.querySelector("#solbriller").className = "";
        document.querySelector("#solbriller").classList.add("sol_ned");
        document.querySelector("#solbriller").classList.add("position" + Math.floor((Math.random() * 5) + 1));
    }
    setTimeout(solbrillerFrem, 1000);
    document.querySelector("#solbriller").addEventListener("click", solbrillerClick);

}

function isFrem() {
    console.log("is Frem");
    if (document.querySelector("#is").classList.contains("is_ned")) {

    } else {
        document.querySelector("#is").className = "";
        document.querySelector("#is").classList.add("sol_ned");
        document.querySelector("#is").classList.add("position" + Math.floor((Math.random() * 5) + 1));
    }
    setTimeout(isFrem, 1000);
    document.querySelector("#is").addEventListener("click", isClick);

}

function skyFrem() {
    console.log("Sky Frem");
    if (document.querySelector("#sur_sky").classList.contains("sky_ned")) {

    } else {
        document.querySelector("#sur_sky").className = "";
        document.querySelector("#sur_sky").classList.add("sol_ned");
        document.querySelector("#sur_sky").classList.add("position" + Math.floor((Math.random() * 5) + 1));
    }
    setTimeout(skyFrem, 1000);
    document.querySelector("#sur_sky").addEventListener("click", surSkyClick);

}

function paraplyFrem() {
    console.log("Paraply Frem");
    if (document.querySelector("#paraply").classList.contains("paraply_ned")) {

    } else {
        document.querySelector("#paraply").className = "";
        document.querySelector("#paraply").classList.add("sol_ned");
        document.querySelector("#paraply").classList.add("position" + Math.floor((Math.random() * 5) + 1));
    }
    setTimeout(paraplyFrem, 1000);
    document.querySelector("#paraply").addEventListener("click", paraplyClick);

}


//          KODE FOR ELEMENTER DER FALDER NED!


function paraplyClick() {
    console.log("minus_point");
    console.log("minus_mist")
    //point = point + 1;
    count = count - 1;
    //point++; fortæller det samme som point = point +1;
    mist = mist - 1;

    console.log(count);

    document.querySelector("#count").innerHTML = count;

    console.log(this);
    //this.classList.add("hide");
    this.classList.remove("paraply_ned");

    this.removeEventListener("click", paraplyClick);

    document.querySelector("#buzzLyd").play();

    console.log(mist);

    document.querySelector("#mist").innerHTML = mist;
    gameStatus();
    tabtPoint();

}


function surSkyClick() {
    console.log("minus_point");
    console.log("minus_mist")
    //point = point + 1;
    count = count - 1;
    //point++; fortæller det samme som point = point +1;
    mist = mist - 1;

    console.log(count);

    document.querySelector("#count").innerHTML = count;

    console.log(this);
    //this.classList.add("hide");
    this.classList.remove("sky_ned");

    this.removeEventListener("click", surSkyClick);

    document.querySelector("#buzzLyd").play();

    console.log(mist);

    document.querySelector("#mist").innerHTML = mist;
    gameStatus();
    tabtPoint();
}

function solClick() {
    console.log("plus_point");
    //point = point + 1;
    count++;
    //point++; fortæller det samme som point = point +1;
    console.log(count);

    document.querySelector("#count").innerHTML = count;

    console.log(this);
    //this.classList.add("hide");
    this.classList.remove("sol_ned");

    this.removeEventListener("click", solClick);

    document.querySelector("#jaLyd").play();


    gameStatus();

}

function solbrillerClick() {
    console.log("plus_point");
    //point = point + 1;
    count++;
    //point++; fortæller det samme som point = point +1;
    console.log(count);

    document.querySelector("#count").innerHTML = count;

    console.log(this);
    //this.classList.add("hide");

    this.classList.remove("solbriller_ned");
    this.removeEventListener("click", solbrillerClick);
    document.querySelector("#jaLyd").play();

    gameStatus();

}

function isClick() {
    console.log("plus_point");
    //point = point + 1;
    count++;
    //point++; fortæller det samme som point = point +1;
    console.log(count);

    document.querySelector("#count").innerHTML = count;

    console.log(this);
    //this.classList.add("hide");

    this.classList.remove("is_ned");

    this.removeEventListener("click", isClick);
    document.querySelector("#jaLyd").play();

    gameStatus();
}


//          KODE FOR ELEMENTER DER FALDER NED SLUT!


function timeLeftFc() {
    console.log("timeLeftFc timeLeft er " + timeLeft);

    if (timeLeft > 0) {
        timeLeft--;
        timeLeftTimeOut = setTimeout(timeLeftFc, 1000);
        document.querySelector("#time").innerHTML = "00: " + timeLeft;

    } else {
        gameover();
    }
}

function tabtLiv() {
    console.log("tabt liv");

    if (mist == 0) {
        gameover();

    } else {
        levelComplete();
    }
}


function gameStatus() {
    console.log("gamestatus")
    if (count == 5) {

        levelComplete();
    }
}

function tabtPoint() {
    console.log("tabt Point");

    if (count < 1) {
        gameover();

    }

}

function gameover() {
    console.log("spil tabt");

    document.querySelector("#levelcomplete").classList.add("hide");

    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#game_elements").classList.add("hide");

    document.querySelector("#reset").addEventListener("click", reset);
    clearTimeout(timeLeftTimeOut);
    timeLeft = 30;
    document.querySelector("#time").innerHTML = "00:" + timeLeft;


}

function levelComplete() {
    console.log("spil vundet");
    document.querySelector("#reset1").addEventListener("click", reset);
    document.querySelector("#gameover").classList.add("hide");

    document.querySelector("#levelcomplete").classList.remove("hide");

    document.querySelector("#game_elements").classList.add("hide");

    clearTimeout(timeLeftTimeOut);
    timeLeft = 30;
    document.querySelector("#time").innerHTML = "00:" + timeLeft;


}

function reset() {
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");

    //showStart();
    window.history.go(0);
}

function reset1() {
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");

    //showStart();
    window.history.go(0);
}

function toggleSounds() {

    console.log("toggleSounds");
    if (document.querySelector("#sfx_on").classList.contains("hide")) {
        document.querySelector("#sfx_on").classList.remove("hide")
        document.querySelector("#sfx_off").classList.add("hide")
        document.querySelector("#buzzLyd").muted = false;
        document.querySelector("#jaLyd").muted = false;
    } else {
        document.querySelector("#sfx_on").classList.add("hide")
        document.querySelector("#sfx_off").classList.remove("hide")
        document.querySelector("#buzzLyd").muted = true;
        document.querySelector("#jaLyd").muted = true;
    }
}

function toggleMusic() {

    console.log("toggleMusic");
    if (document.querySelector("#music_on").classList.contains("hide")) {
        document.querySelector("#music_on").classList.remove("hide")
        document.querySelector("#music_off").classList.add("hide")
        document.querySelector("#musik").muted = false;
    } else {
        document.querySelector("#music_on").classList.add("hide")
        document.querySelector("#music_off").classList.remove("hide")
        document.querySelector("#musik").muted = true;
    }
}
