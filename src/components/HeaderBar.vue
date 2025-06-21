<style>
@import url('/src/styles/HeaderBar.css');
</style>
<template>
  <header class="custom-header">
    <i class="fa-solid fa-house" @click="home"></i>
    <div class="container d-flex flex-column justify-content-center h-100 py-3">
      <div class="text-center mb-3 header-text">
        <h1 class="title" style="font-family: 'Fulldozer', sans-serif;">
          FACULDADE DE TECNOLOGIA - FATEC
        </h1>
        <h2 class="subtitle">CENTRO PAULA SOUZA DE FRANCA</h2>
      </div>

      <div class="logo-text-container">
        <img src="@/assets/logo.jpg" alt="Logo" class="logo-img me-3" />
        <div class="ml-project">
          <h1 class="text-logo">ML</h1>
          <h1 class="text-logo-gra">PROJECT</h1>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
  methods: {
    home() {
      this.$router.push('/')
    }
  }
};
</script>