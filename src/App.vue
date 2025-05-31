<style>
@import url('/src/styles/main.css');
</style>
<template>
  <div class="principal">
    <HeaderBar />
    <main>
      <div class="titulo-principal">Curso DSM - Fatec:</div>
      <div class="container-principal">
        <h4 class="cabecalho-title">Disciplinas:</h4>
        <div v-if="semestreAtivo === null" class="card-disciplina-grid">
          <Semestre v-for="(semestre, index) in semestres" :key="index" :titulo="semestre.titulo"
            :bgColor="index % 2 === 0 ? 'rgba(230, 250, 134, 0.8)' : 'rgba(149, 254, 255, 0.8)'"
            @click="abrirDisciplinas(index)" />
        </div>
        <Transition name="fade-slide">
          <div v-if="semestreAtivo !== null" class="disciplina-wrapper">
            <div class="voltar-container" v-if="!resumoAtivo">
              <button class="botao-voltar" @click="voltar">Voltar</button>
            </div>
            <div class="disciplinas-container" v-if="!resumoAtivo">
              <template v-if="semestres[semestreAtivo].disciplinas.length">
                <Disciplina v-for="(disciplina, i) in semestres[semestreAtivo].disciplinas" :key="i" :nome="disciplina"
                  :bgColor="i % 2 === 0 ? 'rgba(230, 250, 134, 0.8)' : 'rgba(149, 254, 255, 0.8)'"
                  @click="abrirResumo(disciplina)" />
              </template>
              <template v-else>
                <div class="em-construcao-container">
                  <img src="@/assets/em_construcao.png" alt="Em contrução" class="imagem-construcao">
                  <p>Semestre em construção...</p>
                </div>
              </template>
            </div>
            <Resumo v-if="resumoAtivo" :nome="resumoAtivo" @voltar="voltar">
              <p>{{ resumos[resumoAtivo] || "Resumo em breve..."}}</p>
            </Resumo>
          </div>
        </Transition>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import Semestre from "@/components/Semestre.vue";
import Disciplina from "@/components/Disciplina.vue";
import Resumo from "@/components/Resumo.vue";


export default {
  components: {
    HeaderBar,
    Semestre,
    Disciplina,
    Resumo
  },
  data() {
    return {
      resumoAtivo: null,
      semestreAtivo: null,
      resumos: {
        "Algoritmos e Lógica de Programação": "Lorem ipsum dolor sit amet. Est placeat temporibus aut aliquid odit non quasi internos qui modi excepturi. Est quam nihil ut culpa possimus et vitae maiores ab nemo sunt. Sed tempore rerum ut sunt aspernatur aut minima facere? Et dolore provident hic dolores voluptate qui voluptatem dicta.Quo ullam galisum est asperiores fugit et enim sunt ut optio modi et impedit unde 33 totam dolor ut voluptatibus architecto? Vel minima culpa est voluptas repudiandae ex dolorem accusantium ex tempora porro nam mollitia omnis.Id accusantium repellendus et iste dignissimos aut exercitationem maxime aut beatae perferendis qui quaerat voluptate vel eveniet voluptas sit amet quibusdam. Sed dolores nihil non dolores molestiae est aperiam reiciendis ex laboriosam cumque est quae exercitationem sit laudantium optio ea voluptatum minima.",
        "Sistemas Operacionais e Redes de Computadores": "testando2",
      },
      semestres: [
        {
          titulo: "SEMESTRE 1",
          disciplinas: [
            "Algoritmos e Lógica de Programação",
            "Sistemas Operacionais e Redes de Computadores",
            "Modelagem de Banco de Dados",
            "Desenvolvimento Web 1",
            "Engenharia de Software 1",
            "Design Digital"
          ],
        },
        {
          titulo: "SEMESTRE 2",
          disciplinas: [

          ]
        },
        {
          titulo: "SEMESTRE 3",
          disciplinas: [

          ]
        },
        {
          titulo: "SEMESTRE 4",
          disciplinas: [

          ]
        },
        {
          titulo: "SEMESTRE 5",
          disciplinas: [

          ]
        },
        {
          titulo: "SEMESTRE 6",
          disciplinas: [

          ]
        }
      ]
    };
  },
  methods: {
    abrirResumo(disciplina) {
      this.resumoAtivo = disciplina;
    },
    abrirDisciplinas(index) {
      this.semestreAtivo = index;
    },
    voltar() {
      if (this.resumoAtivo) {
        this.resumoAtivo = null;
      } else {
        this.semestreAtivo = null;
      }
    }
  }
};
</script>
