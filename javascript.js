function initTheme() {
    if (window.sessionStorage) {
        var btn_changeTheme = document.getElementById('bg_color');
        btn_changeTheme.addEventListener('click', changeTheme, false);

        if (sessionStorage.themeColor) {
            var themeColor = sessionStorage.getItem('themeColor');
            
            applyTheme(themeColor);
        }
    }
}

function changeTheme() {
    var bg_color = $('body').css('background-color');

    if (bg_color == 'rgb(255, 255, 255)') {
        $('body').css('background-color', 'black');
        $('.white_btn').css('background-color', 'grey');
        sessionStorage.setItem('themeColor', 'black');
    } else {
        $('body').css('background-color', 'white');
        sessionStorage.setItem('themeColor', 'white');
    }
}

function applyTheme() {
    var themeColor = sessionStorage.getItem('themeColor');

    if (themeColor == 'black') {
        $('body').css('background-color', 'black');
    } else {
        $('body').css('background-color', 'white');
    }
}

function init() {
    var themeColor = sessionStorage.getItem('themeColor');
    applyTheme(themeColor);
}
