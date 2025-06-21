<template>
    <div class="disciplina-wrapper">
        <div class="voltar-container">
            <router-link :to="voltarLink">
                <button class="botao-voltar">Voltar</button>
            </router-link>
        </div>
        <Resumo :nome="nome">
            <p>{{ resumo }}</p>
        </Resumo>
    </div>
    <div class="faixa-gradiente"></div>
</template>

<script>
import Resumo from '@/components/Resumo.vue'
import { resumos } from "@/utils/data"
import { useRoute } from 'vue-router'

export default {
    components: { Resumo },
    setup() {
        const route = useRoute()
        const nome = decodeURIComponent(route.params.nome)
        const resumo = resumos[nome] || "Resumo em breve..."
        const voltarLink = document.referrer.includes('semestre') ? -1 : '/semestre'
        return { nome, resumo, voltarLink }
    }
}
</script>