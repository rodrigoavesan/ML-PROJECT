<style>
@import url('/src/styles/Disciplina.css');
</style>
<template>
    <div class="disciplina-card" :style="{ backgroundColor: bgColor }">
      <h3 class="disciplina-title">{{ nome }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      nome: String,
      bgColor: String
    }
  };
  </script>