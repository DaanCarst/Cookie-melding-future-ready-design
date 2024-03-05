document.addEventListener('DOMContentLoaded', function() {
    var consent = localStorage.getItem('userConsent');
    if (consent === null) {
      document.getElementById('cookieConsentBanner').style.display = 'block';
    } else if (consent === 'true') {
      initializeTracking(); 
    }
    
    document.getElementById('acceptCookies').addEventListener('click', function() {
      localStorage.setItem('userConsent', 'true');
      document.getElementById('cookieConsentBanner').style.display = 'none';
      initializeTracking(); 
    });
  
    document.getElementById('declineCookies').addEventListener('click', function() {
      localStorage.setItem('userConsent', 'false');
      document.getElementById('cookieConsentBanner').style.display = 'none';
    });
  });
  
  function initializeTracking() {
    console.log('Tracking initialized.');
  }
  