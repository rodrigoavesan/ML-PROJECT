<style>
@import url('/src/styles/main.css');
</style>
<template>
  <div class="principal">
    <HeaderBar />
    <main>
      <div class="titulo-principal">Curso DSM - Fatec</div>
      <div class="container-principal">
        <div class="card-disciplina-grid" :class="['semestre-wrapper', { 'semestre-ativo': semestre.ativo }]">
          <h4>Disciplinas:</h4>
          <transition-group name="fade-slide" class="card-disciplina-grid">
            <Semestre v-for="(semestre, index) in semestres" :key="index" :titulo="semestre.titulo"
              :disciplinas="semestre.disciplinas" :bgColor="index % 2 === 0 ? '#E6FA86' : '#95FEFF'" />
          </transition-group>
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
        { titulo: "SEMESTRE 1", disciplinas: ["Modelagem de Banco de Dados", "Desenvolvimento Web I", "Algoritmo e Lógica de Programação", "Engenharia de Software I", "Design Digital", "Sistemas Operacionais e Redes de Computadores"] },
        { titulo: "SEMESTRE 2", disciplinas: [] },
        { titulo: "SEMESTRE 3", disciplinas: [] },
        { titulo: "SEMESTRE 4", disciplinas: [] },
        { titulo: "SEMESTRE 5", disciplinas: [] },
        { titulo: "SEMESTRE 6", disciplinas: [] }
      ]
    };
  }
};
</script>
