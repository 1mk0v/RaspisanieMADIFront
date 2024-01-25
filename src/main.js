import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons'


library.add(faCalendar, faUser, faLocationDot)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')