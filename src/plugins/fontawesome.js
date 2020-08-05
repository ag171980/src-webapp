import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandsHelping, faAddressCard, faComments, faSignOutAlt, faFutbol, faComment, faTimes, faArrowRight, faArrowLeft, faInfo} from '@fortawesome/free-solid-svg-icons'
import { faUser, faKey, faAlignLeft,faHeadset,faEye, faInfoCircle,faBullseye,faCalendarAlt,faVenusMars,faPhoneAlt,faUserTag,faAt,faVenus,faMars} from '@fortawesome/free-solid-svg-icons'

import { faHome , faUserPlus , faSignInAlt } from '@fortawesome/free-solid-svg-icons'
// import { } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 /*Para formulario  */
library.add(faUser , faKey)

/*Para Menu sin loguearse  */
library.add(faHome, faUserPlus, faSignInAlt, faArrowRight, faArrowLeft,faHeadset)

library.add(faEye,faInfoCircle,faBullseye,faCalendarAlt,faVenusMars,faPhoneAlt,faUserTag,faAt,faVenus,faMars)


/*Para menu ya logueado */

library.add(faHandsHelping , faAddressCard, faComments, faSignOutAlt, faFutbol, faComment, faAlignLeft, faTimes)


 
Vue.component('font-awesome-icon', FontAwesomeIcon)