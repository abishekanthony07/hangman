const zuSuchendesWort = 'Hausbauer';

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

function ueberPruefeEingabe(value){
    console.log(value)
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