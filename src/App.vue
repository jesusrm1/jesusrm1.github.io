<template>
  <div id="app">
    <barra msg="Welcome to Your Vue.js App"></barra>
    <portada></portada>
    <cuerpo></cuerpo>
    <piePagina></piePagina>
  </div>
</template>

<script>
import barra from './components/barra.vue'
import portada from './components/portada.vue'
import cuerpo from './components/cuerpo.vue'
import piePagina from './components/piePagina.vue'
export default {
  name: 'App',
  components: {
    barra,
    portada,
    cuerpo,
    piePagina

  }
}
</script>

<style>
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body{
    display: table;
    background: #aeb6bf ;
    font-family:sans-serif;
}
p {
  font: condensed 120% sans-serif;
  font-size: large;
}
img{
    display:block;
    margin:auto;
}
a{
    color: black;
}
</style>
