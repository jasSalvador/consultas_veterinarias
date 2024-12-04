<template>
  <div>
    <b-navbar toggleable="lg" class="nav">
       <router-link to="/" class="px-3 py-2">🐶</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
           <router-link to="/" class="">Home</router-link>
        </b-navbar-nav>

        <b-navbar-nav class="ms-auto">
          <router-link to="/newConsultation" class="pe-3 link">Agendar consulta</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "NavbarComponent",
});
</script>

<style >
  .router-link-active {
    color: rgb(17, 17, 17) !important;
    text-decoration: none;
  }
  .router-link-active:hover {
    /* color: rgb(228, 116, 194) !important; */
    color: #DC9226 !important;
  }
  .nav {
    background-color: #198494;
  }
</style>