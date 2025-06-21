<style>
    @import url('/src/styles/Resumo.css');   
</style>
<template>
    <div class="resumo-card">
        <h2 class="resumo-titulo">RESUMO SOBRE {{ nome.toUpperCase() }}:</h2>
        <div class="resumo-texto">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Resumo",
    props: {
        nome: String,
    },

};
</script>