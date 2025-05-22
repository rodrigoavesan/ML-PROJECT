<template>
  <div class="main-wrapper">
    <HeaderBar />
    <main class="content-area bg-custom text-white py-4">
      <div class="container">
        <div class="text-center mb-4">
          <h2>Curso DSM - Fatec</h2>
          <h4 >Disciplinas:</h4>
        </div>
        <div class="card-disciplina">
          <div
            v-for="(semestre, index) in semestres"
            :key="index"
            class="semestre-wrapper"
          >
            <Semestre
              :titulo="semestre.titulo"
              :disciplinas="semestre.disciplinas"
            />
          </div>
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
        { titulo: "SEMESTRE 1", disciplinas: [] },
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
