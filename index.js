document.addEventListener('DOMContentLoaded', function() {
    var consent = localStorage.getItem('userConsent');
    if (consent === null) {
      document.getElementById('cookieConsentBanner').style.display = 'block';
    } else if (consent === 'true') {
      initializeTracking(); // Function to initialize tracking scripts
    }
    
    document.getElementById('acceptCookies').addEventListener('click', function() {
      localStorage.setItem('userConsent', 'true');
      document.getElementById('cookieConsentBanner').style.display = 'none';
      initializeTracking(); // Consent given, initialize tracking
    });
  
    document.getElementById('declineCookies').addEventListener('click', function() {
      localStorage.setItem('userConsent', 'false');
      document.getElementById('cookieConsentBanner').style.display = 'none';
      // Consent not given, do not track
    });
  });
  
  function initializeTracking() {
    // Load tracking scripts or set cookies here
    console.log('Tracking initialized.');
  }
  