import { library } from "@fortawesome/fontawesome-svg-core";
import { faRightToBracket, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faGoogle, faTwitter, faRightToBracket, faSignOut);
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
