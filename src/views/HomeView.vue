<template>
    <div class="tela-inicial">
        <img src="@/assets/pegadas.png" alt="Icone pegadas" class="icone-pegadas" />
        <h2 class="titulo-tutorial">Gostaria de um<br />Tutorial</h2>

        <div class="botoes-tutorial">
            <a class="botao assistir" href="https://www.youtube.com/watch?v=YMJBMjergiI&list=RDYMJBMjergiI&start_radio=1"
                target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-display"></i> Assistir
            </a>
            <button class="botao pular" @click="pular">Pular</button>
        </div>
    </div>
    <div class="faixa-gradiente"></div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    pular() {
      this.$router.push('/semestre')
    }
  }
}
</script>