<style scoped>
@import '@/styles/login.css';
</style>
<template>
  <div class="recuperacao-container">
    <div class="recuperacao-card">
      <div class="recuperacao-ilustracao">
        <img src="@/assets/recuperar.png" alt="Ilustração recuperação" />
      </div>
      <div class="recuperacao-form">
        <h1 class="recuperacao-titulo">RECUPERE<br />SUA SENHA</h1>
        <form @submit.prevent="enviarRecuperacao">
          <div class="input-group">
            <span class="input-icon">
              <i class="fas fa-at"></i>
            </span>
            <input
              type="email"
              v-model="email"
              placeholder="Digite seu E-mail"
              required
            />
            <button type="submit" class="btn-icon">
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
          <router-link to="/login" class="voltar-link">Voltar para o login</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const router = useRouter()

function enviarRecuperacao() {
  router.push('/verificacao-email')
}
</script>