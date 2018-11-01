let count = 0;
let mist = 3;

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
}

function hideStart() {
    console.log("hide start");

    document.querySelector("#play").classList.remove("pulse");

    document.querySelector("#play").removeEventListener("click", hideStart);
    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("start game");

    document.querySelector("#start").classList.remove("fade_out");
    document.querySelector("#start").removeEventListener("animationend", startGame);

    document.querySelector("#start").classList.add("hide");

    //Elementer
    document.querySelector("#paraply").addEventListener("click", paraplyClick);
    document.querySelector("#sur_sky").addEventListener("click", surSkyClick);

    document.querySelector("#sol").addEventListener("click", solClick);
    document.querySelector("#solbriller").addEventListener("click", solbrillerClick);

    document.querySelector("#is").addEventListener("click", isClick);

}

function paraplyClick() {
    console.log("minus_point");
    console.log("minus_mist")
    //point = point + 1;
    count = count - 5;
    //point++; fortæller det samme som point = point +1;
    mist = mist - 1;

    console.log(count);

    document.querySelector("#count").innerHTML = count;

    console.log(this);
    this.classList.add("hide");
    this.removeEventListener("click", paraplyClick);

    console.log(mist);

    document.querySelector("#mist").innerHTML = mist;
}

function surSkyClick() {
    console.log("minus_point");
    console.log("minus_mist")
    //point = point + 1;
    count = count - 5;
    mist = mist - 1;
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
}
