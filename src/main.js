import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'
import 'normalization'

import './assets/js/functions'


import Notifications from '@kyvg/vue3-notification'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPenToSquare, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faRightFromBracket, faTrash, faPenToSquare)



const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store).use(router).use(Notifications).mount('#app')
