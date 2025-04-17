import { withPluginApi } from "discourse/lib/plugin-api";
import Sharing from "discourse/lib/sharing";

export default {
  name: "robot-discourse-connector",

  initialize() {
    withPluginApi("1.15.0", () => {
      // Share: Utrošeni Sati (ERP)
      Sharing.addSource({
        id: "utroseniSati",
        faIcon: "check",
        label: "Utrošeni Sati",
        generateUrl(link, title) {
          return `http://erp.rgt.ba/ipPref/Task?url=${encodeURIComponent(link)}&title=${encodeURIComponent(title)}`;
        },
        shouldOpenInPopup: false,
        popupHeight: 480,
        popupWidth: 1120,
      });

      // Share: Novi problem na kasi
      Sharing.addSource({
        id: "kasaProblem",
        faIcon: "cart-plus",
        label: "Novi Problem na Kasi",
        generateUrl(link, title) {
          return `http://core.rgt.ba/ProblemiKasa/Create?url=${encodeURIComponent(link)}`;
        },
        shouldOpenInPopup: true,
        popupHeight: 600,
        popupWidth: 800,
      });

      // Share: Zatvori problem na kasi
      Sharing.addSource({
        id: "kasaProblemClose",
        faIcon: "cart-arrow-down",
        label: "Zatvori Problem na Kasi",
        generateUrl(link, title) {
          return `http://core.rgt.ba/ProblemiKasa/Zatvori?url=${encodeURIComponent(link)}`;
        },
        shouldOpenInPopup: true,
        popupHeight: 600,
        popupWidth: 800,
      });
    });
  },
};
