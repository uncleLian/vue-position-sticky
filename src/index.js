import vuePositionSticky from './vue-position-sticky'

export default {
    install: function (Vue) {
        Vue.component('vue-position-sticky', vuePositionSticky)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('vue-position-sticky', vuePositionSticky)
}
