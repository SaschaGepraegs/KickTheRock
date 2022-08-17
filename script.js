var KlickAnzahl;
if (localStorage.getItem("Anzahl") == null) {
    localStorage.setItem("Anzahl", 0);
} else {
    KlickAnzahl = localStorage.getItem("Anzahl")
}

document.getElementById("counter").innerHTML = "Dein Score: " + KlickAnzahl;

function klick() {
    KlickAnzahl++;
    console.log("test");
    localStorage.setItem("Anzahl", KlickAnzahl)
    document.getElementById("counter").innerHTML = "Dein Score: " + KlickAnzahl;
}