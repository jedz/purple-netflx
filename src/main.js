// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(./themes/app.${__THEME}.styl)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(quasar/dist/quasar.ie)
// require(quasar/dist/quasar.ie.${__THEME}.css)

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'

import firebase from 'firebase'
import vuefire from 'vuefire'

var config = {
  apiKey: 'AIzaSyBH0jwbqOjlqKPAgG1nkz3cIx6TJNNmsT0',
  authDomain: 'todoapp-ee6ad.firebaseapp.com',
  databaseURL: 'https://todoapp-ee6ad.firebaseio.com',
  projectId: 'todoapp-ee6ad',
  storageBucket: 'todoapp-ee6ad.appspot.com',
  messagingSenderId: '293346428710'
}

Vue.prototype.$db = firebase.initializeApp(config).database()

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework
Vue.use(vuefire)

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App').default)
  })
})
