function refresh() {
    document.getElementById("counter").innerHTML = "Dein Score: " + localStorage.clickcount;
}

if (localStorage.clickcount) {} else {
    localStorage.clickcount = 1;
}

refresh();

function klick() {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
    refresh();
}
