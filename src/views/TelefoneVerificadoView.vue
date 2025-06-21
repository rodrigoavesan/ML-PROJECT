<template>
  <div class="cadastro-container">
    <div class="logo-text-container">
      <img src="@/assets/logo.jpg" alt="Logo" class="logo-img me-3" />
      <div class="ml-project">
        <h1 class="text-logo">ML</h1>
        <h1 class="text-logo-gra">PROJECT</h1>
      </div>
    </div>

    <div class="container-cadastro text-center">
      <img src="@/assets/sucesso.png" alt="Sucesso" class="sucess mb-3" style="max-width: 100px;" />
      <h2 class="text-sucess mb-4">TELEFONE VERIFICADO COM SUCESSO!</h2>
      <button class="btn-next" @click="irParaLogin">
        <div id="text-btn">Próximo</div>
        <span class="arrow">→</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function irParaLogin() {
  router.push('/')
}
</script>

<style scoped>
@import '@/styles/cadastro.css';

.text-sucess {
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 1px 1px 3px #000;
}
</style>
