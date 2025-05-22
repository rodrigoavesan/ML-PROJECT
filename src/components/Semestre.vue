<style >
@import "@/styles/Semestre.css";
</style>
<template>
  <div class="semestre-card">
    <h3 class="semestre-title">{{ titulo }}</h3>
    <ul class="disciplinas-list">
      <li v-for="(disciplina, index) in disciplinas" :key="index">
        {{ disciplina }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Semestre",
  props: {
    titulo: {
      type: String,
      required: true
    },
    disciplinas: {
      type: Array,
      default: () => []
    }
  }
};
</script>


