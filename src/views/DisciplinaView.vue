<template>
    <div class="voltar-container">
        <router-link to="/semestre">
            <button class="botao-voltar">Voltar</button>
        </router-link>
    </div>
    <div class="container-principal">
        <h4 class="cabecalho-title">Disciplinas:</h4>
        <div class="card-disciplina-grid">
            <template v-if="semestre && semestre.disciplina.length">
                <Disciplina v-for="(disciplina, i) in semestre.disciplina" :key="i" :nome="disciplina"
                    :bgColor="i % 2 === 0 ? 'rgba(230, 250, 134, 0.8)' : 'rgba(149, 254, 255, 0.8)'"
                    @click="abrirResumo(disciplina)" />
            </template>
            <template v-else>
                <div class="em-construcao-container">
                    <img src="@/assets/em_construcao.png" alt="Em construção" class="imagem-construcao" />
                    <p>Semestre em construção...</p>
                </div>
            </template>
        </div>
    </div>
    <div class="faixa-gradiente"></div>
</template>

<script>
import Disciplina from '@/components/Disciplina.vue';
import { semestres } from "@/utils/data"
import { useRoute, useRouter } from 'vue-router'

export default {
    components: { Disciplina },
    setup() {
        const route = useRoute()
        const router = useRouter()
        const id = parseInt(route.params.id)
        const semestre = semestres[id]
        const abrirResumo = (disciplina) => {
            router.push(`/resumo/${encodeURIComponent(disciplina)}`)
        }
        return { semestre, abrirResumo }
    }
}
</script>