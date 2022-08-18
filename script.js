function refresh() {
    document.getElementById("counter").innerHTML = "Dein Score: " + localStorage.getItem("clickcount");
}

if (localStorage.getItem("clickcount")) {} else {
    localStorage.setItem("clickcount", "1");
}

refresh();

function klick() {
    localStorage.getItem("clickcount") = Number(localStorage.getItem("clickcount")) + 1;
    refresh();
}
