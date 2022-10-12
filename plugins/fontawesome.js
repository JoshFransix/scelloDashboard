/* Import all the font awesome goodness */
import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

library.add(fas, far);
dom.watch();

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)