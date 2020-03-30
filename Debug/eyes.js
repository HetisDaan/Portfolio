loadEyes();

/**
 * Haalt de html op voor de ogen van de smiley
 * Hint: Console
 */
function loadEyes() {
    console.log('Loading eyes');
    var smileyFace = document.getElementsByClassName('smileyface')[0];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            smileyFace.innerHTML = smileyFace.innerHTML + xhttp.responseText;
        }
    };
    xhttp.open("GET", debugUrl + '?a=2', true);
    xhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhttp.send();
}