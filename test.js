// Function to check if a cookie exists
function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Function to set a cookie
function setCookie(cookieName, cookieValue, expirationDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Check if the cookie exists
const cookieAccepted = getCookie("cookieAccepted");

// If the cookie doesn't exist, set it and hide the cookie banner
if (!cookieAccepted) {
    // Set the cookie to indicate that the user accepted the cookie policy
    setCookie("cookieAccepted", "true", 365); // Expires in 365 days
    // Hide the cookie banner (change "cookie-banner" to the ID or class of your cookie banner)
    document.getElementById("cookie-banner").style.display = "none";
}
