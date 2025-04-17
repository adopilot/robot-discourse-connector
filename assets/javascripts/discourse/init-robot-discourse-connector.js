import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "robot-discourse-connector",

  initialize() {
    withPluginApi("1.15.0", (api) => {
      api.modifyClass("component:post-menu", {
        pluginId: "robot-discourse-connector",

        postMenuButtons: [
          {
            action: "openUtrošeniSati",
            icon: "check",
            label: "Utrošeni Sati",
          },
          {
            action: "openKasaProblem",
            icon: "cart-plus",
            label: "Novi Problem na Kasi",
          },
          {
            action: "openKasaProblemClose",
            icon: "cart-arrow-down",
            label: "Zatvori Problem na Kasi",
          },
        ],

        actions: {
          openUtrošeniSati() {
            const link = window.location.href;
            const title = document.title;
            window.open(
              `http://erp.rgt.ba/ipPref/Task?url=${encodeURIComponent(link)}&title=${encodeURIComponent(title)}`,
              "_blank",
              "width=1120,height=480"
            );
          },
          openKasaProblem() {
            const link = window.location.href;
            window.open(
              `http://core.rgt.ba/ProblemiKasa/Create?url=${encodeURIComponent(link)}`,
              "_blank",
              "width=800,height=600"
            );
          },
          openKasaProblemClose() {
            const link = window.location.href;
            window.open(
              `http://core.rgt.ba/ProblemiKasa/Zatvori?url=${encodeURIComponent(link)}`,
              "_blank",
              "width=800,height=600"
            );
          },
        },
      });
    });
  },
};
