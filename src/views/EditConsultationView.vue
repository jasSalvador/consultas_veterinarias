<template>
  <div>
    <consultationForm v-if="consultationEdit" :consultationBase="consultationEdit" :isEditing="true" @update="handleUpdate" />
  </div>
</template>
  
<script>
import ConsultationForm from "@/components/ConsultationForm.vue";
import axios from "axios";
export default {
  name: "EditConsultationView",
  components: { ConsultationForm },
  props: ["id"], // Recibe el ID de la consulta desde la ruta
  data() {
    return {
      consultationEdit: null,
    };
  },
  created() {
    console.log("ID recibido:", this.id);
    this.fetchConsultation();
  },
  methods: {
    fetchConsultation() {
      axios.get(`http://localhost:3000/consultas/${this.id}`)
        .then((response) => {
          const { nombre, motivo, fecha } = response.data;
          this.consultationEdit = {
            id: this.id,
            name: nombre,
            text: motivo,
            date: fecha,
          };
        })
        .catch((error) => {
          console.error("Error al cargar la consulta:", error);
        });
    },
    handleUpdate() {
      alert("Consulta actualizada con éxito");
      this.$router.push("/");
    },
  },
};
</script>

  <style lang="scss" scoped>
</style>
  
  
  