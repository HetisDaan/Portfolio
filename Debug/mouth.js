
loadMouth();

/**
 * Haalt de html op waarmee de mond van de smiley wordt gemaakt
 * Hint: Console
 */
function loadMouth() {
    console.log('Loading mouth');
    $.ajax({
        url: debugUrl + '?a=3',
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        success: function (data) {
            document.getElementsByClassName('smileyface')[0].innerHTML = document.getElementsByClassName('smileyface')[0].innerHTML + data;
            loadSmileCss();
        }
    });
}

/**
 * Haalt de css op waarmee de smiley blij wordt
 * Hint: Sources tab met breakbpoints
 */
function loadSmileCss() {
    console.log('Loading happy mouth');
    if (!(debugUrl == 'banaan.php?a=2')) {
        $.ajax({
            url: debugUrl + '?a=4',
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            success: function (data) {
                document.getElementsByClassName('smile')[0].style = data;
            }
        });
    }
}