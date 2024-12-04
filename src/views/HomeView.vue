<template>
  <div class="home py-5">
    <h1 class="text-center mx-auto fw-bold text-light bg-secondary w-50 py-1">Todas las consultas <i class="bi bi-calendar3 text-black"></i></h1>
  
    <div v-if="consultations.length" class="container my-5 text-center mx-auto pt-3 pb-2 bg-light cont-list">
      <ul>
        <li v-for="(consultation, index) in consultations" :key="index">
          <div class="d-flex justify-content-between px-3 align-items-center mx-auto">
            <p><span class="fw-bold">Paciente: </span>{{ consultation.nombre }}</p>
            <p><span class="fw-bold">Fecha: </span> {{ formatDate(consultation.fecha) }}</p>
            <p><span class="fw-bold">Motivo consulta: </span> {{ consultation.motivo }}</p>
            <div class="d-flex gap-2 my-2">
              <button @click="updateConsultation(consultation.id)" class="btn btn-info">Actualizar</button>
              <button @click="deleteConsultation(consultation.id)" class="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <h2>No hay consultas</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Vue from "vue"
  export default Vue.extend({
  name: 'HomeView',
  data() {
    return {
      consultations: [],
    }
  },
  methods: {
    getConsultations() {
      console.log("obtener citas");
      axios.get("http://localhost:3000/consultas").then((response) => {
        console.log(response);
        this.consultations = response.data;
      })
      .catch((error) => {
        console.log("error al obtener datos", error);
      });
    },
    //eliminar
    deleteConsultation(id) {
      axios.delete(`http://localhost:3000/consultas/${id}`)
      .then((response) => {
        console.log(response);
        alert("Consulta eliminada")
        this.getConsultations();
      })
      .catch((error) => {
        console.log("error al eliminar", error);
      });
    },
    //actualizar
    updateConsultation(id) {
      this.$router.push({ name: "editConsultation", params: {id} })
    },
    formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
    },
  },
  created() {
    this.getConsultations();
  },
});
</script>


<style scoped>
    ul li {
      list-style: none;
    }
    ul {
      padding: 0;
      margin: 0;
    }
    .home {
      background-image: url('~@/assets/wallper.jpg'); 
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      min-height: 100vh;
    }
</style>