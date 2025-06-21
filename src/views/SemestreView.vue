<template>
  <div class="container-principal">
    <h4 class="cabecalho-title">Semestre:</h4>
    <div class="card-disciplina-grid">
      <Semestre v-for="(semestre, index) in semestres" :key="index" :titulo="semestre.titulo"
        :bgColor="index % 2 === 0 ? 'rgba(230, 250, 134, 0.8)' : 'rgba(149, 254, 255, 0.8)'"
        @click="abrirDisciplinas(index)" />
    </div>
  </div>
  <div class="faixa-gradiente"></div>
</template>

<script>
import Semestre from "@/components/Semestre.vue";
import { semestres } from "@/utils/data"
import { useRouter } from "vue-router";

export default {
  components: { Semestre },
  setup() {
    const router = useRouter();
    const abrirDisciplinas = (index) => {
      router.push(`/semestre/${index}`);
    };
    return { semestres, abrirDisciplinas };
  }
};
</script>