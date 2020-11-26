if (typeof (localStorage) == 'undefined') {
    alert('Tu navegador no soporta Local Storage.');
} else {
    if (localStorage.getItem("background") != null) {
        getColour = localStorage.background;
	document.body.style.backgroundColor = getColour;
    }
}

function cambiarColor(n) {
    let setColour;
    if(n == 1) setColour = "#82c8a0";
    if(n == 2) setColour = "#6698cb";
    if(n == 3) setColour = "#fa5a5a";
    if(n == 4) setColour = "#cb99c5";
    if(n == 5) setColour = "#7fccde";
    if(n == 6) setColour = "#f0d264"; 
    localStorage.removeItem('background');
    document.body.style.backgroundColor = setColour;
    localStorage.setItem("background", setColour);
}

function reestablecerFondo() {
  localStorage.removeItem("background");
  document.body.style.backgroundColor = "#eaedf1";
}
