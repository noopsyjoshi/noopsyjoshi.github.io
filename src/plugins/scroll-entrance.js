// import Vue from 'vue'
// import { LG } from '~/utils/constants'

// class ScrollEntrance {
//   constructor () {
//     this.duration = '1000'
//     this.distance = '200'
//     this.heightOffset = 200
//   }

//   isElemInView (elem) {
//     const rect = elem.getBoundingClientRect()

//     return (
//       // The top is in view
//       (rect.top + this.heightOffset >= 0 &&
//         rect.top + this.heightOffset <= window.innerHeight) ||
//       // The bottom is in view
//       (rect.bottom + this.heightOffset >= 0 &&
//         rect.bottom + this.heightOffset <= window.innerHeight) ||
//       // The top is above the viewport and the bottom is below the viewport
//       (rect.top + this.heightOffset < 0 &&
//         rect.bottom + this.heightOffset > window.innerHeight)
//     )
//   }

//   setInitialStyles (elem) {
//     document.body.style.overflowX = 'hidden'

//     const element = elem
//     const anim = element.getAttribute('data-entrance')
//     const delay = element.getAttribute('data-entrance-delay')

//     element.style.transition = `all ${this.duration / 1000}s ease`

//     if (delay) {
//       element.style.transitionDelay = `${delay / 1000}s`
//     }

//     // Transition types
//     if (anim === 'fade') {
//       element.style.opacity = '0'
//     }

//     if (anim === 'from-left') {
//       element.style.opacity = '0'
//       element.style.transform = `translate(-${this.distance}px, 0)`
//     }

//     if (anim === 'from-right') {
//       element.style.opacity = '0'
//       element.style.transform = `translate(${this.distance}px, 0)`
//     }

//     if (anim === 'from-top') {
//       element.style.opacity = '0'
//       element.style.transform = `translate(0, -${this.distance}px)`
//     }

//     if (anim === 'from-bottom') {
//       element.style.opacity = '0'
//       element.style.transform = `translate(0, ${this.distance}px)`
//     }
//   }

//   viewportChange () {
//     this.elements = document.querySelectorAll('[data-entrance]')

//     for (let i = 0; i < this.elements.length; i += 1) {
//       if (this.isElemInView(this.elements[i])) {
//         const hasEntered = this.elements[i].classList.contains('has-entered')

//         if (!hasEntered) {
//           this.elements[i].style.visibility = 'visible'
//           this.elements[i].style.opacity = '1'
//           this.elements[i].style.transform = 'translate(0, 0)'

//           this.elements[i].className += ' has-entered'
//         }
//       }
//     }
//   }

//   init () {
//     for (let i = 0; i < this.elements.length; i += 1) {
//       this.setInitialStyles(this.elements[i])

//       if (this.isElemInView(this.elements[i])) {
//         window.addEventListener(
//           'load',
//           () => {
//             this.elements[i].style.visibility = 'visible'
//             this.elements[i].style.opacity = '1'
//             this.elements[i].style.transform = 'translate(0, 0)'

//             this.elements[i].className += ' has-entered'
//           },
//           false
//         )
//       }
//     }
//   }

//   mount () {
//     this.elements = document.querySelectorAll('[data-entrance]')

//     if (window.innerWidth > LG) {
//       this.init()
//       window.addEventListener('scroll', this.viewportChange.bind(this), false)
//       window.addEventListener('resize', this.viewportChange.bind(this), false)
//     } else {
//       for (let i = 0; i < this.elements.length; i += 1) {
//         this.elements[i].className += ' reveal-entrance'
//       }
//     }
//   }

//   destroy () {
//     this.elements = null
//     window.addEventListener('scroll', this.viewportChange.bind(this))
//     window.addEventListener('resize', this.viewportChange.bind(this))
//   }
// }

// Vue.prototype.$scrollEntrance = new ScrollEntrance()
