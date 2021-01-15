import Vue from 'vue'

export function showError() {
   Vue.toasted.global.defaultError()
}

export default { showError }