import Vue from 'vue'
import Filter from '@/assets/js/filter'

Vue.prototype.$filter = Filter
for (let key in Filter) {
  Vue.filter(key, Filter[key])
}
