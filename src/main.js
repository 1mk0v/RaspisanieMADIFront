import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'

// import './assets/styles/main.sass'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { 
    faLocationDot, faDoorClosed, faArrowUp, faArrowDown, faHouse, faFilter,
    faUser
    
} from '@fortawesome/free-solid-svg-icons';

import { faCalendar, faComment } from '@fortawesome/free-regular-svg-icons'


library.add(
    faCalendar, faUser, faLocationDot, faDoorClosed, faArrowUp, faArrowDown, faComment,
    faHouse, faFilter)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')