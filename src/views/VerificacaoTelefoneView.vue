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
      <p class="titulo">Seu telefone precisa ser verificado...</p>
      <p>Para continuar, precisamos que verifique se você tem acesso ao telefone (XX) XXXXX-XXXX.</p>
      <p>Enviamos um código para seu celular. Coloque o código:</p>

      <form class="cadastro-form" @submit.prevent="verificarCodigo">
        <div class="row g-3">
          <div class="col-md-6" v-for="i in 6" :key="i" id="div-codigo">
            <input
              type="number"
              class="form-control"
              v-model="codigo[i - 1]"
              maxlength="1"
              placeholder="____"
              required
            />
          </div>
        </div>
        <button type="submit" class="btn-next mt-4">
          <div id="text-btn">Verificar</div>
          <span class="arrow">→</span>
        </button>
      </form>

      <div class="mt-3">
        <a href="#" class="d-block text-center">Se precisar, clique aqui para reenviar</a>
        <p class="suporte text-center mt-2">
          Precisando de ajuda? <a href="#">Contate nosso suporte</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const codigo = ref(["", "", "", "", "", ""])

function verificarCodigo() {
  router.push('/telefone-verificado')
}
</script>

<style scoped>
@import '@/styles/cadastro.css';

.titulo {
  font-weight: bold;
  font-size: 1.3rem;
}

#div-codigo input {
  text-align: center;
  font-size: 1.2rem;
  padding: 12px;
}
</style>
