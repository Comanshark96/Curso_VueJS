const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Hola mundo con Vue',
    frutas: [
      {nombre: 'Pera', cantidad: 10},
      {nombre: 'Manzana', cantidad: 5},
      {nombre: 'Banana', cantidad: 0}
    ],
    nuevaFruta: '',
  },
  methods: {
    agregarFruta() {
      this.frutas.push({
	nombre: this.nuevaFruta, cantidad: 0
      })
    },
  }
})
