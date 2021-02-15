Vue.component('padre', {
  template:`
  <div class="text-center p-5 bg-dark text-white">
    <h2>Componente padre: {{ numero }}</h2>
    <h3>Tien por hijo a «{{ nombreHijo }}»</h3>
    <hijo></hijo>
  </div>
  `,
  data() {
    return {
      nombrePadre: ''
    }
  },

  computed: {
    ...Vuex.mapState(['numero', 'nombreHijo']) // Se utilizan mapStates para llamar directamente a los datos.
  }
})
  
Vue.component('hijo', {
  template:`
  <div class="m-2 text-white text-center bg-danger">
    <h3>Componente hijo: {{ $store.state.numero }}</h3>
    <h4>Nombre: {{ $store.state.nombreHijo }}</h4>
    <button class="btn btn-success" @click="$store.commit('aumentar')">+</button>
  </div>
  `,
})

const store = new Vuex.Store({
  state: {
    numero: 0,
    nombreHijo: 'Julio'
  },
  mutations: {
    aumentar() {
      this.state.numero++;
    }
  }
})

const app = new Vue({
  el: '#app',
  data: {
  },
  methods: {
  },
  computed: {
  },
  store
})
