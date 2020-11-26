if (typeof (localStorage) == 'undefined') {
    alert('Tu navegador no soporta Local Storage.');
} else {
    if (localStorage.getItem("background") != null) {
        getColour = localStorage.background;
	document.body.style.backgroundColor = getColour;
    }
}

if (typeof (sessionStorage) == 'undefined') {
    alert('Tu navegador no soporta Session Storage.');
} else {
    if (sessionStorage.getItem("name") != null) {
        getName = sessionStorage.name;
	document.getElementById("topItems").innerHTML = "<h2>" + getName + "</h2>";
    }
}

function obtenerNombre() {
    let texto = document.getElementById("textField");
    cambiarNombre(texto.value);
}

function cambiarNombre(nom) {
    let setName = nom;
    document.getElementById("topItems").innerHTML = "<h2>" + setName + "</h2>";
    sessionStorage.setItem("name", setName);
}

function cambiarColor(n) {
    let setColour;
    if(n == 1) setColour = "#82c8a0";
    if(n == 2) setColour = "#6698cb";
    if(n == 3) setColour = "#fa5a5a";
    if(n == 4) setColour = "#cb99c5";
    if(n == 5) setColour = "#7fccde";
    if(n == 6) setColour = "#f0d264"; 
    document.body.style.backgroundColor = setColour;
    localStorage.setItem("background", setColour);
}

function reestablecerFondo() {
  localStorage.removeItem("background");
  document.body.style.backgroundColor = "#eaedf1";
}
