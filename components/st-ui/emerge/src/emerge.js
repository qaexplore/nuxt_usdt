import Vue from 'vue'
import StEmerge from './emerge.vue'

const EmergeContrustor = Vue.extend(StEmerge)
let emergePool = []

let getAnInstance = () => {
  if (emergePool.length > 0) {
    let instance = emergePool[0]
    emergePool.splice(0, 1)
    return instance
  }
  return new EmergeContrustor({
    el: document.createElement('div')
  })
}

let returnAnInstance = instance => {
  if (instance) {
    emergePool.push(instance)
  }
}

let removeDom = event => {
  // console.log('aaa', event)
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

EmergeContrustor.prototype.close = function () {
  this.visible = false
  this.$el.addEventListener('transitionend', removeDom)
  this.closed = true
  returnAnInstance(this)
}

let Emerge = (options = {}) => {
  // console.log('options:::',options)
  // let duration = options.duration || 3000
  let instance = getAnInstance()
  instance.className = 'box normal '
  instance.closed = false
  clearTimeout(instance.timer)
  instance.title = options.title
  instance.message = typeof options === 'string' ? options : options.message
  instance.className += options.className || ''

  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.visible = true
    instance.$el.removeEventListener('transitionend', removeDom)
    // duration && (instance.timer = setTimeout (function () {
    //   if (instance.closed) return
    //   instance.close()
    // }, duration))
  })
  return instance
}

export default Emerge

