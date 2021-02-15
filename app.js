Vue.component('padre', {
  template:`
  <div class="text-center p-5 bg-dark text-white">
    <h2>Componente padre: {{ numero }}</h2>
    <button class="btn btn-success" @click="numero++">+</button>
    <hijo :numero="numero"></hijo>
  </div>
  `,
  data() {
    return {numero: 0}
  }
})
  
Vue.component('hijo', {
  template:`
  <div class="m-2 text-white text-center bg-danger">
    <h3>Componente hijo: {{ numero }}</h3>
  </div>
  `,
  props: ['numero']
})

const app = new Vue({
  el: '#app',
  data: {
  },
  methods: {
  },
  computed: {
  }
})
