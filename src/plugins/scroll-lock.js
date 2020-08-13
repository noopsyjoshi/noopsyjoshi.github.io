import Vue from 'vue'

if (process.client) {
  const scrollLock = require('scroll-lock')
  Vue.prototype.$scrollLock = scrollLock
}
