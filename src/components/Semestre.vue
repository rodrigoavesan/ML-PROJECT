<style>
@import "@/styles/Semestre.css";
</style>
<template>
  <div class="semestre-card" :style="{ backgroundColor: bgColor }" @click="toggleOpen">
    <h3 class="semestre-title">{{ titulo }}</h3>
    <transition name="fade">
      <ul v-if="aberto" class="disciplinas-list">
        <li v-for="(disciplina, index) in disciplinas" :key="index">
          {{ disciplina }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Semestre",
  props: {
    titulo: String,
    disciplinas: Array,
    bgColor: {
      type: String,
      default: '#fff'
    }
  },
  data() {
    return {
      aberto: false
    };
  },
  methods: {
    toggleOpen() {
      this.aberto = !this.aberto;
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>