<style scoped>
@import '@/styles/login.css';
</style>
<template>
  <div class="login-container">
    <div class="logo-text-container">
      <img src="@/assets/logo.jpg" alt="Logo" class="logo-img me-3" />
      <div class="ml-project">
        <h1 class="text-logo">ML</h1>
        <h1 class="text-logo-gra">PROJECT</h1>
      </div>
    </div>

    <div class="form-card">
      <form @submit.prevent="irParaHome">
        <div class="input-group">
          <span class="input-icon">
            <i class="fas fa-at"></i>
          </span>
          <input type="text" placeholder="Insira seu E-mail" v-model="email" required />
        </div>

        <div class="input-group">
          <span class="input-icon">
            <i class="fas fa-lock"></i>
          </span>
          <input type="password" placeholder="Senha" v-model="password" required />
          <button type="submit" class="btn-icon">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>

        <div class="extras" >
          <label><input type="checkbox" v-model="lembrar"/> Remember me</label>
          <a href="#" class="forgot-link" @click.prevent="irParaRecuperacao">Esqueceu sua senha? <strong>Clique aqui</strong></a>
        </div>
      </form>
    </div>

    <footer class="login-footer" @click.prevent="irParaCadastro">
      <span>Não tem cadastro? <a href="#">Cadastre-se</a></span>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const lembrar = ref(false)
const router = useRouter()

function irParaRecuperacao() {
  router.push('/recuperacao')
}
function irParaCadastro() {
  router.push('/cadastro')
}

function irParaHome() {
  router.push('/home')
}
</script>
