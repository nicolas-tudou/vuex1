import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        val: '666'
    },
    mutations: {
        changeVal(state, newVal) {
            this.state.val = newVal;
        }
    }
})

export default store
