<style>
@import "@/styles/Semestre.css";
</style>
<template>
  <div class="semestre-card" :style="{ backgroundColor: bgColor }">
    <h3 class="semestre-title">{{ titulo }}</h3>
  </div>
</template>

<script>
export default {
  name: "Semestre",
  props: {
    titulo: String,
    bgColor: String
  },
};
</script>