const app = new Vue({
  el: '#app',
  data: {
    titulo: 'GYM con Vue',
    tareas: [],
    nuevaTarea: '' // Se espera una nueva tarea
  },

  methods: {
    agregarTarea() {
      if (this.nuevaTarea != '') {
	this.tareas.push({
	  nombre: this.nuevaTarea,
	  estado: false
	});
	this.nuevaTarea = '';
	localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
      }
    },

    editarEstado(indice) {
      this.tareas[indice].estado = true;
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    },

    eliminarTarea(indice) {
      this.tareas.splice(indice, 1);
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    }
  },

  created() {
    let datosDB = JSON.parse(localStorage.getItem('gym-vue'));

    if (datosDB === null) {
      this.tareas = [];
    } else {
      this.tareas = datosDB;
    }
  }
})
