var zuSuchendesWort = '';
let arrayGenutzeBuchstaben = [];
let fehlerAnzahlUser = 0;
let spielgewonnen = false;
const rounds = 0;
const highscoreURL = 'http://localhost:9090/api/highscore';

function initView() {
    getRandomWord();
    initKeyboard();
    initSaveButton();
}

function getRandomWord() {
 const path = "/Liste.txt";

    const file = new XMLHttpRequest();
    file.open("GET", path, false);
    file.onreadystatechange = function ()
    {
        if(file.readyState === 4)
        {
            if (file.status === 200 || file.status === 0) {
                const allData = file.responseText;
                const lines = allData.split("\n");
                const randomNumber = Math.floor(Math.random() * lines.length);
                const line = lines[randomNumber];
                zuSuchendesWort = line.replace("\r","").toUpperCase();
                generateUnderscore();
            }
        }
    }
    file.send(null);
}


function initKeyboard() {
    const arrayIDs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z", "Ä", "Ü", "Ö", "ß"]
    for (let i = 0; i < arrayIDs.length; i++) {
        document.getElementById(arrayIDs[i]).onclick = function () {
            ueberPruefeEingabe(arrayIDs[i])
        };
    }
}

function initSaveButton() {
    document.getElementById("saveHighscore").onclick = function () {
        let person = prompt("Bitte geben Sie ihren Benutzernamen ein.", "");
        if (person == null || person === "" || person.length > 5) {
            alert("Highscore wurde nicht gespeichert.");
        } else {
            saveGame(person, rounds.toString())
        }
    };
}

function ueberPruefeEingabe(buchstabe) {
    console.log(buchstabe);


    if (arrayGenutzeBuchstaben.includes(buchstabe)) {
        alert("Buchstabe " + buchstabe + " wurde bereits eingegeben");
    } else {
        arrayGenutzeBuchstaben.push(buchstabe);
        document.getElementById(buchstabe).style.backgroundColor = "grey";
        if (enthaeltZuSuchendesWortDenBuchstaben(buchstabe)) {
            fuelleDieUnterstriche(buchstabe);
            if (istWortBereitsErraten()) {
                alert("Spiel gewonnen");
                spielgewonnen = true;
            }
        } else {
            fehlerEingabeVonUser();
        }
    }

    istSpielGewonnen();


}

function istSpielGewonnen() {
    if (spielgewonnen) {
        alertUserNewGame();
    }
}


function alertUserNewGame() {
    setTimeout(function () {
        let auswahl = confirm("Neues Spiel gefällig?");
        if (auswahl) {
            newGame();
        } else {
            alert("Dann eben nicht...");
        }

    }, 1000);
}

function newGame() {
    setzeBackgroundColorZurueck(arrayGenutzeBuchstaben);
    arrayGenutzeBuchstaben = [];
    fehlerAnzahlUser = 0;
    spielgewonnen = false;
    pfadZuHangmanZustand = aktualisiereBild(0);
    document.getElementById("hangmanZustand").src = pfadZuHangmanZustand;
    getRandomWord()
}

function setzeBackgroundColorZurueck(arrayGenutzeBuchstaben) {
    let arrayUsedBuchstaben = arrayGenutzeBuchstaben;

    for (let i = 0; i < arrayUsedBuchstaben.length; i++) {
        document.getElementById(arrayUsedBuchstaben[i]).style.backgroundColor = '#eee';
    }

}

function enthaeltZuSuchendesWortDenBuchstaben(buchstabe) {
    return zuSuchendesWort.includes(buchstabe);
}

function fuelleDieUnterstriche(buchstabe) {
    const indices = [];
    for (let i = 0; i < zuSuchendesWort.length; i++) {
        if (zuSuchendesWort[i] === buchstabe) {
            indices.push(i);
        }

    }

    for (let i = 0; i < indices.length; i++) {
        const id = "underscore-" + indices[i];
        document.getElementById(id).innerHTML = `&nbsp;${buchstabe}&nbsp;`;

    }

}

function istWortBereitsErraten() {
    let anzahlBuchstaben = 0;
    for (let i = 0; i < zuSuchendesWort.length; i++) {
        if (arrayGenutzeBuchstaben.includes(zuSuchendesWort.charAt(i))) {
            ++anzahlBuchstaben;
        }
    }

    return anzahlBuchstaben === zuSuchendesWort.length;
}

function generateUnderscore() {
    const head = document.getElementById("zuErwartendesWort");
    head.querySelectorAll('*').forEach(n => n.remove());

    const div = document.createElement("div");
    div.id = "underscores"
    div.className = 'box centered centerContent';

    for (let i = 0; i < zuSuchendesWort.length; i++) {
        if(zuSuchendesWort[i]==='-' || zuSuchendesWort[i]==="-"){
            let u = document.createElement("b");
            u.className = 'hiddenText'
            u.innerHTML = `&nbsp;-&nbsp;`;
            u.id = `underscore-${i}`;
            let platzHalter = document.createElement("b");
            platzHalter.innerHTML = `&nbsp;`;
            div.appendChild(u);
            div.appendChild(platzHalter);
        }else{
            let u = document.createElement("u");
            u.className = 'hiddenText'
            u.innerHTML = `&nbsp;&nbsp;&nbsp;`;
            u.id = `underscore-${i}`;
            let platzHalter = document.createElement("b");
            platzHalter.innerHTML = `&nbsp;`;
            div.appendChild(u);
            div.appendChild(platzHalter);
        }
    }
    if (head !== null) {
        head.appendChild(div)
        return true
    } else {
        return false
    }
}

function aktualisiereBild(fehler) {
    const pfad = "../assets/images/zuständeHangman/Hangman_";
    const fehlerteil = "_Fehler";
    const dateityp = ".png";
    switch (fehler) {
        case 0:
            return pfad + "0" + fehlerteil + dateityp;
        case 1:
            return pfad + "1" + fehlerteil + dateityp;
        case 2:
            return pfad + "2" + fehlerteil + dateityp;
        case 3:
            return pfad + "3" + fehlerteil + dateityp;
        case 4:
            return pfad + "4" + fehlerteil + dateityp;
        case 5:
            return pfad + "5" + fehlerteil + dateityp;
        case 6:
            return pfad + "6" + fehlerteil + dateityp;
        case 7:
            return pfad + "7" + fehlerteil + dateityp;
        case 8:
            return pfad + "8" + fehlerteil + dateityp;
        case 9:
            return pfad + "9" + fehlerteil + dateityp;
        case 10:
            return pfad + "game_over" + dateityp;
    }
}

function fehlerEingabeVonUser() {
    fehlerAnzahlUser++;

    let pfadZuHangmanZustand = aktualisiereBild(fehlerAnzahlUser);

    if (fehlerAnzahlUser >= 10) {
        alert("GAME OVER...du Lusche");
        document.getElementById("hangmanZustand").src = aktualisiereBild(10);
        alertUserNewGame();
    } else if (fehlerAnzahlUser < 11) {
        pfadZuHangmanZustand = aktualisiereBild(fehlerAnzahlUser);
        document.getElementById("hangmanZustand").src = pfadZuHangmanZustand;
    }
}

async function saveGame(username, score) {
    let entry = await fetch(highscoreURL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username: username, score: score})
    });

    // Gespeicherten Eintrag anzeigen
    await entry.json();
    alert(`Folgendes wurde gespeichert: ${username} hat ${score} Wörter erraten`);
}
