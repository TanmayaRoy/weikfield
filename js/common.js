/*function openLink(offerType, iOSUrl, androidUrl) {
  const userAgent = navigator.userAgent || navigator.vendor || window['opera'];
  // iOS detection
  const url = /iPad|iPhone|iPod/.test(userAgent) && !window['MSStream'] ? iOSUrl : androidUrl;
  if (url) {
      trackEvent(offerType);
      window.location.href = url;
  }
}

//Google Analytics
function trackEvent(offerLabel) {
  ga('send', {
      hitType: 'event',
      eventCategory: 'Weikfeild_offer',
      eventAction: 'Click',
      eventLabel: offerLabel
  });
}
*/

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      content.style.padding = null;
    } else {
      console.log(i)
      content.style.maxHeight =content.scrollHeight + "px";
      content.style.padding = '15px 10px';
    } 
  });
  
}
function shareShowHide() {
  $("#bottomUp").toggleClass("open");
  $("#overlay").toggleClass("show");
}

function goToAppHome() {
  if (window['MyAirtelAppReact']) {
      window['MyAirtelAppReact'].close();
  } else {
     window.webkit.messageHandlers.launchBrowser.postMessage("myairtel://payment_bank");
  }
}