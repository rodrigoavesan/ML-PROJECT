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
      <p class="titulo">Seu e-mail precisa ser verificado...</p>
      <p>
        Para continuar, precisamos que verifique se você tem acesso ao endereço:
        <strong>exemploemail@exemplo.com</strong>
      </p>
      <p>
        Enviamos um e-mail para a sua caixa postal para que possamos verificar seu usuário.
        Se não achar, procure na pasta de <strong>spam</strong> ou <strong>lixeira</strong>.
      </p>

      <div class="mt-3" @click.prevent="senhaAlterada">
        <a href="#" class="d-block">Se precisar, clique aqui para reenviar</a>
        <p class="suporte mt-2">
          Precisando de ajuda? <a href="#">Contate nosso suporte</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function senhaAlterada() {
  router.push('/senha-recuperacao')
}
</script>

<style scoped>
@import '@/styles/cadastro.css';

.titulo {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
