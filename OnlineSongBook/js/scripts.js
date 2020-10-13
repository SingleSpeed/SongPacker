function getQueryStringParamByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function searchSongsByNumber(number, songs) {
    for (var i=0; i < songs.length; i++) {
        if (songs[i].ordinal === number) {
            return songs[i];
        }
    }
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function getThemeClassFromCookie() {
    var theme = getCookie("theme");
    if (theme && theme === "dark-mode") {
        return "dark-mode";
    } else {
        return "light-mode";
    }
}

function turnToTheDarkSide() {
  var element = document.body;
   element.classList.toggle("dark-mode");

  var theme = getCookie("theme");
  if (theme && theme === "dark-mode") {
    setCookie("theme","",90);
    document.getElementById("lightordark").innerHTML = "Dark theme";
  } else {
    setCookie("theme","dark-mode",90);
    document.getElementById("lightordark").innerHTML = "Light theme";
  }
}

