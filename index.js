  function acceptCookies() {
    setCookie("cookiesAccepted", "true", 365); // Cookie expires in 365 days
    document.getElementById("cookieBanner").style.display = "none";
  }
  
  function declineCookies() {
    document.getElementById("cookieBanner").style.display = "none";
  }
  
  function setCookie(name, value, seconds) {
    var expires = "";
    if (seconds) {
        var date = new Date();
        date.setTime(date.getTime() + (seconds * 1000)); // Convert seconds to milliseconds
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
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
  
  window.onload = function() {
    if (getCookie("cookiesAccepted")) {
      document.getElementById("cookieBanner").style.display = "none";
    }
  }
  