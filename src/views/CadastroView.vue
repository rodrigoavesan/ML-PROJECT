<style scoped>
@import '@/styles/cadastro.css';
</style>
<template>
  <div class="cadastro-container">
    <div class="logo-text-container">
      <img src="@/assets/logo.jpg" alt="Logo" class="logo-img me-3" />
      <div class="ml-project">
        <h1 class="text-logo">ML</h1>
        <h1 class="text-logo-gra">PROJECT</h1>
      </div>
    </div>

    <div class="container-cadastro">
      <form class="cadastro-form" @submit.prevent="irParaVerificacao">
        <legend>Cadastro</legend>
        <fieldset class="mb-3 px-2 border rounded">
          <div class="row g-3">
            <div class="col-md-6" id="assets">
              <img src="@/assets/perfil.png" alt="Nome" />
              <input type="text" class="form-control" v-model="firstName" placeholder="First Name" required />
            </div>
            <div class="col-md-6" id="assets">
              <img src="@/assets/perfil.png" alt="Sobrenome" />
              <input type="text" class="form-control" v-model="lastName" placeholder="Last Name" required />
            </div>
          </div>

          <div class="mb-3" id="assets">
            <img src="@/assets/email.png" alt="Email" />
            <input type="email" class="form-control" v-model="email" placeholder="E-mail" required />
          </div>

          <div class="mb-3" id="assets">
            <img src="@/assets/phone.png" alt="Telefone" />
            <input type="tel" class="form-control" v-model="phone" placeholder="Phone" required />
          </div>

          <div class="mb-3" id="assets">
            <img src="@/assets/password.png" alt="Senha" />
            <input type="password" class="form-control" v-model="password" placeholder="Password" required />
          </div>

          <div class="mb-3" id="assets">
            <img src="@/assets/password.png" alt="Confirmar Senha" />
            <input type="password" class="form-control" v-model="confirmPassword" placeholder="Confirm Password" required />
          </div>

          <div class="form-check terms-check">
            <input class="form-check-input" type="checkbox" v-model="aceitouTermos" id="terms" required />
            <label class="form-check-label" for="terms">
              Eu li e concordo com os <a href="#">Termos</a> e <a href="#">Condições</a>
            </label>
          </div>
        </fieldset>

        <button type="submit" class="btn-next">
          <div id="text-btn">Próximo</div>
          <span class="arrow">→</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const confirmPassword = ref('')
const aceitouTermos = ref(false)

function irParaVerificacao() {
  router.push('/verificacao-telefone')
}
</script>
