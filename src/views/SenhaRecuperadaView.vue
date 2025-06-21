<style scoped>
@import '@/styles/login.css';
</style>
<template>
  <div class="recuperacao-container">
    <div class="recuperacao-card">
      <!-- Ilustração à esquerda -->
      <div class="recuperacao-ilustracao">
        <img src="@/assets/recuperar.png" alt="Ilustração recuperação" />
      </div>

      <!-- Formulário à direita -->
      <div class="recuperacao-form">
        <h1 class="recuperacao-titulo">RECUPERAR</h1>
        <form @submit.prevent="voltarLogin">
          <div class="input-group">
            <span class="input-icon"><i class="fas fa-lock"></i></span>
            <input
              type="password"
              v-model="senha"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <div class="input-group">
            <span class="input-icon"><i class="fas fa-lock"></i></span>
            <input
              type="password"
              v-model="confirmarSenha"
              placeholder="Repita sua senha"
              required
            />
            <button type="submit" class="btn-icon">
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const senha = ref('')
const confirmarSenha = ref('')
const router = useRouter()

function voltarLogin() {
  if (senha.value === confirmarSenha.value) {
    router.push('/login')
  } else {
    alert('As senhas não coincidem!')
  }
}
</script>