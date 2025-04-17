Sharing.addSource({
  id: 'utroseniSati',
  faIcon: 'check', // remove the "fa-" prefix
  generateUrl(link, title) {
    return "http://erp.rgt.ba/ipPref/Task?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title);
  },
  shouldOpenInPopup: false,
  popupHeight: 480,
  popupWidth: 1120
});

Sharing.addSource({
  id: 'kasaProblem',
  faIcon: 'cart-plus', // was "fa-cart-plus"
  generateUrl(link, title) {
    return "http://core.rgt.ba/ProblemiKasa/Create?url=" + encodeURIComponent(link);
  },
  shouldOpenInPopup: true,
  popupHeight: 600,
  popupWidth: 800
});

Sharing.addSource({
  id: 'kasaProblemClose',
  faIcon: 'cart-arrow-down', // was "fa-cart-arrow-down"
  generateUrl(link, title) {
    return "http://core.rgt.ba/ProblemiKasa/Zatvori?url=" + encodeURIComponent(link);
  },
  shouldOpenInPopup: true,
  popupHeight: 600,
  popupWidth: 800
});
