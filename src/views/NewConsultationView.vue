<template>
  <div>
    <consultationForm @created="addNewConsultation" />
  </div>
</template>

<script>
import ConsultationForm from '@/components/ConsultationForm.vue'
import Vue from "vue"
  export default Vue.extend({
    name: 'NewconsultationView',
    components: {
      ConsultationForm
    },
    methods: {
      addNewConsultation() {
        console.log("consulta agregada");
      }
    }
  });
</script>

<style lang="scss" scoped>

</style>


<!-- <template>
  <div class="cont-form">
    <h1 class="text-center mx-auto py-5 fw-bold text-dark">
      Agregar consulta veterinaria
    </h1>
    <div class="w-50 text-center mx-auto form-consultations px-5 pt-5 pb-4 rounded-4">
      <b-form @submit.prevent="addconsultation">
        <b-form-input
          id="input-1"
          v-model="consultation.name"
          placeholder="Ingresa el nombre de tu mascota"
          required
          class="mb-2"
        ></b-form-input>

        <b-form-textarea
          id="textarea"
          v-model="consultation.text"
          placeholder="Ingresa el motivo de la consulta..."
          rows="3"
          max-rows="4"
          class="mb-2"
        ></b-form-textarea>

        <b-form-input
          id="input-3"
          v-model="consultation.date"
          type="date"
          required
          class="mb-2"
        ></b-form-input>

        <b-button
          type="submit"
          variant="primary"
          class="me-3 mt-4 border border-light border-2"
          >Guardar</b-button
        >
        <b-button
          type="reset"
          variant="danger"
          class="mt-4 border border-light border-2"
          >Cancelar</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default Vue.extend({
  name: "NewconsultationView",
  data() {
    return {
      consultation: {
        name: "",
        date: "",
        text: "",
      },
      show: true,
    };
  },
  methods: {
    addconsultation() {
      console.log("gregando consulta:", this.consultation);
      axios
        .post("http://localhost:3000/consultas", {
          nombre: this.consultation.name,
          fecha: this.consultation.date,
          motivo: this.consultation.text,
        })
        .then((response) => {
          console.log("respuesta", response.data);
          alert("Consulta agregada con exito");
          this.$router.push("/");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
</script>

<style>
.form-consultations {
  background-image: url("~@/assets/wallper.jpg"); /* Usa ~@ para hacer referencia a la carpeta src */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.cont-form {
  /* background-color: #cbf7c5; */
  background-color: #a4d6df;
  min-height: 100vh;
}
</style>
-->