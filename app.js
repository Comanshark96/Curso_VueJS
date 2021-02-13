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
    totalFrutas: 0,
  },
  methods: {
    agregarFruta() {
      this.frutas.push({
	nombre: this.nuevaFruta, cantidad: 0
      });
      this.nuevaFruta = '';
    },
  },
  computed: {
    sumarFrutas() {
      this.totalFrutas = 0;
      for(fruta of this.frutas){
	this.totalFrutas += fruta.cantidad;
      }
      
      return this.totalFrutas
    }
  }
})
