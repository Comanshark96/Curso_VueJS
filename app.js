Vue.component('padre', {
  template:`
  <div class="text-center p-5 bg-dark text-white">
    <h2>Componente padre: {{ numero }}</h2>
    <h3>Tien por hijo a «{{ nombrePadre }}»</h3>
    <button class="btn btn-success" @click="numero++">+</button>
    <hijo :numero="numero" @nombreHijo="nombrePadre = $event"></hijo>
  </div>
  `,
  data() {
    return {
      numero: 0,
      nombrePadre: ''
    }
  }
})
  
Vue.component('hijo', {
  template:`
  <div class="m-2 text-white text-center bg-danger">
    <h3>Componente hijo: {{ numero }}</h3>
    <h4>Nombre: {{ nombre }}</h4>
  </div>
  `,
  props: ['numero'],

  data() {
    return {nombre: 'Julio'}
  },
  
  mounted() {
    this.$emit('nombreHijo', this.nombre)
  }
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
