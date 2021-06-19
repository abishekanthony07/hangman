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