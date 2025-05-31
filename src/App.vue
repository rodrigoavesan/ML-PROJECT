<style>
@import url('/src/styles/main.css');
</style>
<template>
  <div class="principal">
    <HeaderBar />
    <main>
      <div class="titulo-principal">Curso DSM - Fatec:</div>
      <div class="container-principal">
        <h4 class="disciplina-title">Disciplinas:</h4>
        <div class="card-disciplina-grid" :class="['semestre-wrapper', { 'semestre-ativo': semestres.ativo }]">
          <Semestre v-for="(semestres, index) in semestres" :key="index" :titulo="semestres.titulo"
            :bgColor="index % 2 === 0 ? 'rgba(230, 250, 134, 0.8)' : 'rgba(149, 254, 255, 0.8)'" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import Semestre from "@/components/Semestre.vue";

export default {
  components: {
    HeaderBar,
    Semestre
  },
  data() {
    return {
      semestres: [
        { titulo: "SEMESTRE 1" },
        { titulo: "SEMESTRE 2" },
        { titulo: "SEMESTRE 3" },
        { titulo: "SEMESTRE 4" },
        { titulo: "SEMESTRE 5" },
        { titulo: "SEMESTRE 6" }
      ]
    };
  }
};
</script>
