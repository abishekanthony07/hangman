const zuSuchendesWort = 'Hausbauer';

// window.onload = initView;

function initView(){
    initKeyboard();
    generateUnderscore();
}

function initKeyboard(){
    return "Abiushek";
}

function generateUnderscore(){
    const head = document.getElementById("zuErwartendesWort")
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

function  fehlerEingabeVonUser() {
     fehlerAnzahlUser++;

      var pfadZuHangmanZustand = aktualisiereBild(fehlerAnzahlUser);

      document.getElementById("hangmanZustand").src = pfadZuHangmanZustand;

}