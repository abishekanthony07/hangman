const automarkenURL = 'http://localhost:9090/api/highscore';

function loadValues() {
    loadHighscores();
}

function loadHighscores() {
    const head = document.getElementById('highscores');
    const xhr = new XMLHttpRequest();
    xhr.open("GET", automarkenURL);
    xhr.responseType = "json";
    xhr.onload = function () {
        // xhr.response beinhaltet die deserialisierte JSON-Antwort
        showResult(head, xhr.response._embedded.highscore);
    };
    xhr.send();
}

function showResult(head, array) {
    head.innerHTML = "";
    let i;
    const container = document.createElement("div");
    container.className = "container"
    let div;
    if (array.length>0){
        div = notEmptyList(i, array);
    }else{
        div = emptyList();
    }
    head.appendChild(div);
}

function emptyList() {
    const div = document.createElement("div");
    div.className = "box";
    const h1 = document.createElement("h1");
    h1.className = "title";
    h1.innerHTML = `Sie haben keine Highscores, die angezeigt werden können.`
    div.appendChild(h1);
    return div;
}

function notEmptyList(i, array) {
    const div = document.createElement("div");
    div.className = "box";
    for (i = 0; i < array.length; i++) {
        const h1 = document.createElement("h1");
        h1.className = "title";
        h1.innerHTML = listItem(i, array)
        h1.type = "button";
        div.appendChild(h1);
    }
    return div;
}

function listItem(i, array) {
    return `${array[i].datetime}
           <br/>
           <b>${array[i].username}</b> hat <b>${array[i].score}</b> Wörter erraten`;
}