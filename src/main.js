import { createApp } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';


import router from './router'

import vuetify from './plugins/vuetify'




// Import the functions you need from the SDKs yo

// Import the functions you need from the SDKs you need

library.add(fas);




createApp(App)
  .use(router)
  .use(vuetify)
  .component('fa', FontAwesomeIcon)

  .mount('#app');
