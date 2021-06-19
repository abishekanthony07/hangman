const zuSuchendesWort = 'HAUSBAUER';
const arrayGenutzeBuchstaben = [];
var fehlerAnzahlUser = 0;

function initView(){
    initKeyboard();
    generateUnderscore();

}

function initKeyboard(){
    const arrayIDs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z", "Ä", "Ü", "Ö", "ß"]
    for (let i = 0; i < arrayIDs.length; i++) {
        document.getElementById(arrayIDs[i]).onclick = function(){ueberPruefeEingabe(arrayIDs[i])};
    }
}

function ueberPruefeEingabe(buchstabe){
    console.log(buchstabe);
    if(arrayGenutzeBuchstaben.includes(buchstabe)) {
        alert("Buchstabe " + buchstabe + " wurde bereits eingegeben");
    } else {
       arrayGenutzeBuchstaben.push(buchstabe);
       document.getElementById(buchstabe).style.backgroundColor = "grey";
       if(enthältZuSuchendesWortDenBuchstaben(buchstabe)) {
            fuelleDieUnterstriche(buchstabe);
        } else {
            fehlerEingabeVonUser();
        }
    }

}

function enthältZuSuchendesWortDenBuchstaben(buchstabe) {
    if(zuSuchendesWort.includes(buchstabe)) {
        return true;
    } else {
        return false;
    }
}

function fuelleDieUnterstriche(buchstabe) {
    var indices = [];
    for (let i = 0; i < zuSuchendesWort.length; i++) {
        if(zuSuchendesWort[i] === buchstabe) {
        indices.push(i);
        }

    }

    for (let i = 0; i < indices.length; i++) {
         var id = "underscore-" + indices[i];
         document.getElementById(id).innerHTML = `&nbsp;${buchstabe}&nbsp;`;

        }

}

function generateUnderscore(){
    const head = document.getElementById("zuErwartendesWort");
    const div = document.createElement("div");
    div.className = 'box centered centerContent';

    for (let i = 0; i < zuSuchendesWort.length; i++) {
        let u = document.createElement("u");
        u.className = 'hiddenText'
        u.innerHTML = `&nbsp;&nbsp;&nbsp;`;
        u.id =`underscore-${i}`;
        let platzHalter = document.createElement("b");
        platzHalter.innerHTML =`&nbsp;`;
        div.appendChild(u);
        div.appendChild(platzHalter);
    }
    if (head !== null){
        head.appendChild(div)
        return true
    }else {
        return false
    }
}

function aktualisiereBild(fehler) {
            var pfad = "../assets/images/zuständeHangman/Hangman_";
            var fehlerteil = "_Fehler";
            var dateityp = ".png";
            switch (fehler) {
              case 0:
                return pfad + "0" + fehlerteil + dateityp;
              case 1:
                return  pfad + "1" + fehlerteil + dateityp;
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

    var pfadZuHangmanZustand = aktualisiereBild(fehlerAnzahlUser);

     if(fehlerAnzahlUser >= 11) {
     alert("GAME OVER...du Lusche");
     } else if(fehlerAnzahlUser < 11) {
     var pfadZuHangmanZustand = aktualisiereBild(fehlerAnzahlUser);
     document.getElementById("hangmanZustand").src = pfadZuHangmanZustand;
     }



function saveGame(username, score) {
    const json = JSON.stringify({ "username": username, "score": score })
    const url = 'http://localhost:9090/api/highscore';
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send();
    xhr.onload = function () {
        // xhr.response beinhaltet die deserialisierte JSON-Antwort
        console.log(xhr.response)
    };
    return json
}
